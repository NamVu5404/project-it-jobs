import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getListJob } from "../../services/searchService";
import { Row, Tag } from "antd";
import SearchResult from "../SearchResult";
import GoBack from "../GoBack";

function SearchItem() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const citySearch = searchParams.get("city") || "";
  const keywordSearch = searchParams.get("keyword") || "";
  const tagsSearch = (searchParams.get("tags") && searchParams.get("tags").split(",")) || "";

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListJob();
      if (response) {
        const newData = response.filter((item) => {
          const city = citySearch
            ? item.city?.includes(citySearch) ||
              citySearch === "Tất cả địa điểm"
            : true;
          const keyword = keywordSearch
            ? item.name?.includes(keywordSearch)
            : true;
          const tags = tagsSearch
            ? tagsSearch?.every((val) => item.tags?.includes(val))
            : true;
          return city && keyword && tags && item.status;
        });
        setData(newData.reverse());
      }
    };
    fetchApi();
  }, [citySearch, keywordSearch, tagsSearch]);

  return (
    <>
      <GoBack step={-1} name="Trở lại" /> 

      <h3 style={{ color: "#000" }}>
        <span>Kết quả tìm kiếm: </span>
        {citySearch && <Tag>{citySearch}</Tag>}
        {keywordSearch && <Tag>{keywordSearch}</Tag>}
        {tagsSearch &&
          tagsSearch.map((item, index) => <Tag key={index}>{item}</Tag>)}
      </h3>

      <Row gutter={[15, 15]}>
        <SearchResult data={data} />
      </Row>
    </>
  );
}

export default SearchItem;
