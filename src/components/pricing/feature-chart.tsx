import featureData from "../../components/pricing/features.json";
import kObj from "@/interface/features";

export default function FeatureChart() {
  const keys: (keyof kObj)[] = [
    "UNLIMITED STORY POSTING",
    "UNLIMITED PHOTO UPLOAD",
    "EMBEDDING CUSTOM CONTENT",
    "CUSTOMIZE METADATA",
    "ADVANCED METRICS",
    "PHOTO DOWNLOADS",
    "SEARCH ENGINE INDEXING",
    "CUSTOM ANALYTICS",
  ];

  return (
    <div className="feature-chart">
      <h2>COMPARE</h2>
      <table>
        <thead>
          <tr>
            <th>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>BUSINESS</th>
          </tr>
        </thead>
        <tbody>
          {featureData.map((feature, index) => {
            const currentKey = keys[index];

            return (
              <tr key={Math.random() * 100}>
                {Array.from({ length: 4 }, (_, key) => {
                  if (key === 0)
                    return <td key={Math.random() * 100}>{currentKey}</td>;
                  else if (
                    key === 1 &&
                    !!featureData[index][keys[index]]?.Basic
                  )
                    return (
                      <td key={Math.random() * 100}>
                        <img
                          src="/pricing/desktop/check.svg"
                          alt="checkmark-icon"
                        />
                      </td>
                    );
                  else if (key === 2 && !!featureData[index][keys[index]]?.Pro)
                    return (
                      <td key={Math.random() * 100}>
                        <img
                          src="/pricing/desktop/check.svg"
                          alt="checkmark-icon"
                        />
                      </td>
                    );
                  else if (
                    key === 3 &&
                    !!featureData[index][keys[index]]?.Business
                  )
                    return (
                      <td key={Math.random() * 100}>
                        <img
                          src="/pricing/desktop/check.svg"
                          alt="checkmark-icon"
                        />
                      </td>
                    );
                  else return <td key={Math.random() * 100}></td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
