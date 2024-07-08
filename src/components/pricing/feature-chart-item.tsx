import { deeperKObj } from "@/interface/features";

interface Props {
  data: deeperKObj;
  header: string;
}

export default function FeatureChartItem(props: Props) {
  return (
    <div className="feature-chart-item">
      <h2>{props.header}</h2>
      <ul>
        <li>
          BASIC
          <span>
            {!!props.data.Basic ? (
              <img src="/pricing/desktop/check.svg" alt="checkmark-icon" />
            ) : (
              ""
            )}
          </span>
        </li>
        <li>
          PRO
          <span>
            {!!props.data.Pro ? (
              <img src="/pricing/desktop/check.svg" alt="checkmark-icon" />
            ) : (
              ""
            )}
          </span>
        </li>
        <li>
          BUSINESS
          <span>
            {!!props.data.Business ? (
              <img src="/pricing/desktop/check.svg" alt="checkmark-icon" />
            ) : (
              ""
            )}
          </span>
        </li>
      </ul>
    </div>
  );
}
