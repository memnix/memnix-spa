import axios from 'axios'

export default function ({ store, redirect }) {
    
    axios.get(
        `http://localhost:1813/api/user/`,
        {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true
        }
      ).then((response) => {

        console.log(response)

      if (response.status !== 200) {
        return redirect('/login')
      }})
      .catch((error) => {
        console.log(error.message)

        return redirect('/login')
      })
  }