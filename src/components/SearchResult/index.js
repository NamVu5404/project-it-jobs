import { Col } from "antd";
import "./SearchResult.scss";
import { useEffect, useState } from "react";
import { getListCompany } from "../../services/searchService";
import CardInfoJob from "../../components/CardInfoJob";
import "./SearchResult.scss";
import ScrollToTop from "../ScrollToTop";

function SearchResult(props) {
  const { data } = props;
  const [company, setCompany] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCompany();
      setCompany(response);
    };
    fetchApi();
  }, []);

  return (
    <>
      {data.length ? (
        data.map((item) => (
          <CardInfoJob item={item} company={company} key={item.id} />
        ))
      ) : (
        <Col xs={24}>
          <h3 style={{ color: "#000" }}>Không có kết quả tìm kiếm phù hợp!</h3>
        </Col>
      )}

      <ScrollToTop />
    </>
  );
}

export default SearchResult;
