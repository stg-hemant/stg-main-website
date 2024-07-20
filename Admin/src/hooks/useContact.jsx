import axios from "axios";
import { toast } from "react-toastify";

import { base_URL } from "../components/constants/constants";

const useContact = (fullName, email, subject, message) => {
  const contact = async () => {
    try {
      const responseContact = await axios.post(`${base_URL}/enquiries`, {
        type: "NA",
        interestedFor: subject,
        companyName: "NA",
        name: fullName,
        emailId: email,
        country: "NA",
        mobile: "NA",
        remarks: message,
        designation: "NA",
      });
      // console.log(responseContact);

      if (responseContact.data[0].result) {
        toast.success(responseContact.data[0].message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return contact;
};

export default useContact;
