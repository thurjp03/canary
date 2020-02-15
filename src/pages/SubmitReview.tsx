import React, { useState, useEffect, ChangeEvent } from 'react';
import './SubmitReview.css';

import { RouteComponentProps } from "@reach/router"
import { Input, Form, Button, Select, AutoComplete, Radio, Tooltip } from 'antd/es';
import { QuestionCircleOutlined } from '@ant-design/icons';
// import { InputChangeEvent } from 'antd/es/input';

const { Option } = Select;

// const formItemLayout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 8 },
// };
// const formTailLayout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 8, offset: 4 },
// };

const collegeSuggestions = [
  "Georgia Institute of Technology",
  "Carnegie Mellon",
  "Georgia State school",
]

const majors = [
  "Computer Science",
  "Computational Media",
  "Mechanical Engineering",
].map((option, i) => <Option value={option} key={i}>{option}</Option>)

const DynamicRule = () => {
  const [form] = Form.useForm();

  // useEffect(() => {
  //   form.validateFields(['nickname']);
  // }, [checkNick]);

  // const onCheckboxChange = (e: CheckboxChangeEvent) => {
  //   if (e.target) setCheckNick((e.target as HTMLInputElement).checked);
  // };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <Form form={form} layout="vertical" name="dynamic_rule">
      <Form.Item
        name="name"
        label="Full name (will not be public)"
        rules={[
          {
            required: true,
            message: 'Please input your full name',
          },
        ]}
      >
        <Input placeholder="Please input your full name" />
      </Form.Item>
      <Form.Item
        name="school"
        label="School"
        rules={[
          {
            required: true,
            message: 'Please input your school',
          }
        ]}>
        <AutoComplete
          dataSource={collegeSuggestions}
          placeholder="Please input your school"
          filterOption={(inputValue, option) =>
            option ? option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
          }
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="School email (will not be public)"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid school email',
          },
        ]}
      >
        <Input placeholder="Please input your school email" />
      </Form.Item>
      <Form.Item
        name="majors"
        label={
          <span>
            Major(s)&nbsp;
            <Tooltip title="Test">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your major(s)',
          },
        ]}
      >
        <Select mode="tags" placeholder="Please input your major(s)" style={{ width: '100%' }} tokenSeparators={[',']}>
          {majors}
        </Select>
      </Form.Item>
      <Form.Item
        name="year"
        label="Year"
      >
        <YearInput/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


interface YearValue {
  gradLevel?: 'undergraduate' | 'graduate';
  year?: '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th+';
}

interface YearInputProps {
  value?: YearValue;
  onChange?: (value: YearValue) => void;
}

const YearInput: React.FC<YearInputProps> = ({ value = {}, onChange }) => {
  const [gradLevel, setGradLevel] = useState();
  const [year, setYear] = useState();

  const triggerChange = changedValue => {
    if (onChange) {
      onChange({ gradLevel, year, ...value, ...changedValue });
    }
  };

  const onGradLevelChange = e => {
    let newVal = e.target.value;
    if (!('gradLevel' in value)) {
      setGradLevel(newVal);
    }
    triggerChange({ gradLevel: newVal });
  };

  const onCurrencyChange = e => {
    let newVal = e.target.value;
    if (!('currency' in value)) {
      setYear(newVal);
    }
    triggerChange({ year: newVal });
  };

  return (
    <span className="year-select">
      <Radio.Group onChange={onGradLevelChange}>
        <Radio.Button value="undergraduate">Undergraduate</Radio.Button>
        <Radio.Button value="graduate">Graduate</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onCurrencyChange}>
        <Radio.Button value="1st">1st</Radio.Button>
        <Radio.Button value="2nd">2nd</Radio.Button>
        <Radio.Button value="3rd">3rd</Radio.Button>
        <Radio.Button value="4th">4th</Radio.Button>
        <Radio.Button value="5th">5th</Radio.Button>
        <Radio.Button value="6th+">6th+</Radio.Button>
      </Radio.Group>
    </span>
  )
}

const SubmitReview = (props: RouteComponentProps) => {
  return (
    <div className="SubmitReview">
      <DynamicRule/>
    </div>
  );
}

export default SubmitReview;