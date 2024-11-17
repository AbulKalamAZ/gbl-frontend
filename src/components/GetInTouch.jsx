import PrimaryButton from "./PrimaryButton";

const GetInTouch = () => {
  return (
    <div className="section-full p-20 bg-getintouch-bg bg-top bg-cover">
      <div className="get-in-touch2">
        <div className="row justify-content-between d-flex align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className="get-in-touch2-info">
              <h2 className="wt-title text-4xl font-bold mb-8">
                ARATCO is a leading ARAMCO Vendor Code holding Manpower Support
                Service provider
              </h2>
              <PrimaryButton content="Download Company Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
