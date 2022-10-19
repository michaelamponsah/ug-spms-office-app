import AppTable from "../../../components/AppTable";
import Head from "../../../components/Head";
import InnerPageWrapper from "../../../components/InnerPageWrapper";
import { COLUMNS } from "../../../components/utils/constants";
import {data} from "../../../components/MOCK_DATA";

const SeniorLecturerPromotionsPage = () => {
  return (
    <InnerPageWrapper>
      <Head title="SPMS | UG - Applicants for Promotion" />
      <h1 className="heading-main align-center">
        List of Applicants for Promotion
      </h1>
      <hr />
      <section>
        <AppTable tableData={data} tableColumns={COLUMNS} />
      </section>
    </InnerPageWrapper>
  );
};

export default SeniorLecturerPromotionsPage;
