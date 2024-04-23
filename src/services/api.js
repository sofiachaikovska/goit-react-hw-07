import axios from "axios";

export const requestAllContacts = async () => {
  const { data } = await axios.get(
    "https://66278902b625bf088c08b619.mockapi.io/contacts"
  );
  return data;
};

export const requestPostContact = async (newContactData) => {
  const { data } = await axios.post(
    "https://66278902b625bf088c08b619.mockapi.io/contacts",
    newContactData
  );
  return data;
};

export const requestDeleteContact = async (contactId) => {
  const { data } = await axios.delete(
    `https://66278902b625bf088c08b619.mockapi.io/contacts/${contactId}`
  );
  return data;
};
