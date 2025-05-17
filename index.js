document.addEventListener('DOMContentLoaded', getToDos());

// function getToDos() {

//     // Lấy dữ liệu từ API thông qua fetch
//     fetch("https://68287be66b7628c529137aa5.mockapi.io/Tasks/task")
//     // Chuyển đổi data về jsonjson
//     .then((response) => response.json())
//     // In ra dữ liệu
//     .then((response) => console.log(response))
//     // Bắt lỗi nếu không lấy được dữ liệu datadata
//     .catch((error) => console.log(error))


// }

// hàm bất đồng bộ
async function getToDos() {
    // try {
    //     // Bất đồng bộ
    //     const response = axios.get("https://68287be66b7628c529137aa5.mockapi.io/Tasks/task")
    //     .then((response) => console.log(response.data));
    // } catch (error) {
    //     console.log(error);
    // }

 try {
        // await đợi đến khi nào xử lý xong rồi mới chạy tiếp
        // await luôn luôn đi với async
        const response = await axios.get("https://68287bdc6b7628c529137a43.mockapi.io/task/task");
          console.log(response.data)
       
         const ul = document.querySelector(".todo-list");
          response.data.forEach((item) => {
            const date = new Date(item.createdAt);
            console.log(date.toLocaleDateString());
            console.log(date.toLocaleTimeString());
           const formatedDate = `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`
           console.log(formatedDate) 

          const li = document.createElement("li");
          li.className ="todo-item"
          li.innerHTML = `<div class="todo-content">
              <input type="checkbox" />
              <div>
                <span>${item.content}</span>
                <div>Created: ${formatedDate}</div>
              </div>
            </div>
            <div class="todo-actions">
              <button>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>`
          ul.appendChild(li)
          }
        
        );
         
  
    } catch (error) {
        console.log(error);
    }
}