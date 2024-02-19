import React from "react";
import "./stakingList.css";
import { formatDate, fromWei } from "../../utils/web3Utils";

const StakingList = ({ userStakes, unstakeTokensFunction }) => {
  // Aquí iría la lógica para obtener la lista de stakes del usuario
  console.log("list", userStakes);
  return (
    <div className="stakingContainer">
      <table className="stakingTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Staked Amount</th>
            <th>Withdrawal Time</th>
            <th>Unstake</th>
          </tr>
        </thead>
        <tbody>
          {userStakes._amounts.map((amount, index) => {
            // Calcula el timestamp de finalización
            const endTime = Number(userStakes._startTimes[index]) * 1000 + Number(userStakes._durations[index]) * 1000;
            // Obtén el timestamp actual
            const currentTime = Date.now();

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{fromWei(amount)} KIMBA</td>
                <td>{formatDate(endTime / 1000)}</td>
                {/* Comprueba si el stake ya ha sido reclamado o si la fecha de finalización ya ha pasado */}
                {userStakes._unstakeds[index] || currentTime < endTime ? (
                  <>
                    {userStakes._unstakeds[index] && <td>Claimed</td>}
                    {currentTime < endTime && <td>Locked</td>}
                  </>
                ) : (
                  <td>
                    <button
                      onClick={() => {
                        unstakeTokensFunction(index);
                      }}
                    >
                      Claim
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StakingList;
