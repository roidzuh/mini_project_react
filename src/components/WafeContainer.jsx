import styled from "styled-components";

const WafeContainer = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 158, 203, 0.85),
      rgba(63, 81, 181, 0.85)
    ),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 137" preserveAspectRatio="none"><path d="M0,137V59.03716c158.97703,52.21241,257.17659,0.48065,375.35967,2.17167,118.18308,1.69101,168.54911,29.1665,243.12679,30.10771C693.06415,92.25775,855.93515,29.278599,1080,73.61449V137Z" style="opacity:0.85"/><path d="M0,10.174557C83.419822,8.405668,117.65911,41.78116,204.11379,44.65308,290.56846,47.52499,396.02558,-7.4328,620.04248,94.40134,782.19141,29.627636,825.67279,15.823104,1080,98.55518V137H0Z" style="opacity:0.5"/><path d="M0,45.10182C216.27861,-66.146913,327.90348,63.09813,416.42665,63.52904,504.94982,63.95995,530.42054,22.125806,615.37532,25.210412,700.33012,28.295019,790.77619,132.60682,1080,31.125744V137H0Z" style="opacity:0.25"/></svg>');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    display: flex;
    width: 80%;
  }
`;

export default WafeContainer;
