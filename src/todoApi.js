import axios from "axios";

const getAll = async () => {
  try {
    const response = await axios.get(
      "https://64a80f89dca581464b8538e3.mockapi.io/employees"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getAll };
