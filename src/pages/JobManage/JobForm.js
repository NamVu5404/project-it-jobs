import { Col, Form, Input, InputNumber, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { getListCity, getListTags } from "../../services/searchService";

function JobForm() {
  const [tags, setTags] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const responseTags = await getListTags();
      setTags(responseTags);

      const responseCity = await getListCity();
      setCity(responseCity);
    };
    fetchApi();
  }, []);

  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];

  return (
    <>
      <Col xs={18}>
        <Form.Item name="name" label="Tên job" rules={rules}>
          <Input />
        </Form.Item>
      </Col>

      <Col xs={6}>
        <Form.Item name="salary" label="Mức lương" rules={rules}>
          <InputNumber addonAfter="$" />
        </Form.Item>
      </Col>

      <Col xs={14}>
        <Form.Item name="tags" label="Tags" rules={rules}>
          <Select
            mode="multiple"
            allowClear
            options={tags}
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>

      <Col xs={10}>
        <Form.Item name="city" label="Thành phố" rules={rules}>
          <Select
            mode="multiple"
            allowClear
            options={city}
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>

      <Col xs={24}>
        <Form.Item name="description" label="Mô tả">
          <TextArea style={{ minHeight: "150px" }} />
        </Form.Item>
      </Col>

      <Col xs={24}>
        <Form.Item name="status" label="Trạng thái">
          <Switch
            checkedChildren="public"
            unCheckedChildren="private"
            defaultChecked
          />
        </Form.Item>
      </Col>
    </>
  );
}

export default JobForm;
