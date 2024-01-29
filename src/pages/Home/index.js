import { useEffect, useState } from "react";
import CardInfoCompany from "../../components/CardInfoCompany";
import SearchForm from "../../components/SearchForm";
import { getListCompany } from "../../services/searchService";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";

function Home() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCompany();
      setCompany(response);
    };
    fetchApi();
  }, []);

  return (
    <>
      <h1 className="content__title">1000+ IT Jobs For Developers</h1>
      <SearchForm />
      <div>
        <h2 className="content__title">Danh sách một số công ty</h2>
        <Row gutter={[15, 15]}>
          {company.slice(0, 3).map((item) => (
            <CardInfoCompany company={item} key={item.id} />
          ))}
        </Row>

        {company.length > 3 && (
          <Link state={{ company: company }} to="/company">
            <Button style={{ marginTop: "20px" }}>Xem thêm</Button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Home;
