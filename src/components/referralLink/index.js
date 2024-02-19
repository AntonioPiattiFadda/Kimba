import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import "../../Variables.css";
import "./referralLink.css";
import { useWeb3Context } from "../../context/Web3Context";

const ReferralLink = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [referralLink, setReferralLink] = useState("");
  const { account } = useWeb3Context();

  useEffect(() => {
    if (account) {
      const lowerCaseAccount = account.toLowerCase();
      const encodedAccount = btoa(lowerCaseAccount);
      setReferralLink(`http://localhost:3000/?ref=${encodedAccount}`);
    }
  }, [account]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopiedLink(true);
      setTimeout(() => {
        setCopiedLink(false);
      }, 2000);
    });
  };

  return (
    <div className="referralLinkContainer">
      <span>Refer and earn 10% in KIMBA</span>
      <div className="referralLink">
        <input className="referralInput" type="text" value={referralLink} readOnly />
        <button onClick={handleCopy} className="referralButton">
          {copiedLink ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ReferralLink;
