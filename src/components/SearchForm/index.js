import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { getListCity, getListTags } from "../../services/searchService";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [city, setCity] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const responseCity = await getListCity();
      setCity([
        {
          key: 0,
          value: "Tất cả địa điểm",
        },
        ...responseCity,
      ]);

      const responseTags = await getListTags();
      setTags(responseTags);
    };
    fetchApi();
  }, []);

  const handleSubmit = (values) => {
    if (values.citySearch || values.inputSearch || values.tagsSearch) {
      navigate(`/search?city=${values.citySearch || ""}&keyword=${values.inputSearch || ""}&tags=${values.tagsSearch || ""}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Row gutter={[20]}>
          <Col>
            <Form.Item name="citySearch">
              <Select
                showSearch
                style={{
                  width: 150,
                }}
                placeholder="Tất cả địa điểm"
                options={city}
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item name="inputSearch">
              <Input
                style={{
                  width: 450,
                }}
                placeholder="Vị trí tuyển dụng..."
              />
            </Form.Item>
          </Col>

          <Col>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Col>

          <Col xs={13}>
            <Form.Item name="tagsSearch">
              <Select
                mode="multiple"
                allowClear
                options={tags}
                style={{ width: "100%" }}
                placeholder="Chọn ngôn ngữ..."
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default SearchForm;
