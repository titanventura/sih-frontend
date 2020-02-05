
class Sihdata {
    constructor(timestamp, camera_no, regex_string, image_link) {
        this.timestamp = timestamp;
        this.camera_no = camera_no;
        this.regex_string = regex_string;
        this.image_link = image_link;
    }
}

displayFrontend = function () {
    const main_container = document.getElementById("some");

    console.log(main_container);
    const object_list = callBackend();
    const children_container = document.createElement("table");
    children_container.className = "striped";
    const tbody = document.createElement("tbody");
    main_container.appendChild(children_container);
    children_container.appendChild(tbody);

    
    
    object_list.forEach(
        (data_obj) => {
            
            let tr = document.createElement("tr");
            tbody.appendChild(tr);

            let camera_header = document.createElement("td");
            camera_header.textContent = data_obj.camera_no;
            tr.appendChild(camera_header);

            let ts = document.createElement("td");
            ts.textContent = data_obj.timestamp;
            ts.style.fontSize = "1.3rem";
            tr.appendChild(ts); 

            let rs = document.createElement("td");
            rs.textContent = data_obj.regex_string;
            rs.style.fontSize = "1.3rem";
            tr.appendChild(rs);
            
            

            let image = document.createElement("img");
            image.src = data_obj.image_link;
            image.style.width="50px";
            image.style.height="30px";

            let modal_init = document.createElement("span");
            modal_init.href = data_obj.image_link;
            modal_init.dataTarget = "modal1";
            modal_init.className = "modal-trigger";
            modal_init.appendChild(image);
            modal_init.onclick=initializeModal;
            tr.appendChild(modal_init);
        }
    );

    // Call the callBackend method and add elemets to the DOM through looping.
}

function initializeModal(e){
    console.log(e.target.src);

    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
    
}

callBackend = function () {
    // Call data from the backend
    let timestamp_list = [new Date(Date.now()), new Date(Date.now()), new Date(Date.now()), new Date(Date.now())];
    let camera_no_list = [1, 2, 3, 4];
    let regex_string_list = ["TN46AU8877", "TN46AU8877", "TN46AU8877", "TN46AU8877"];
    let image_link_list = ["https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]


    const object_list = [];

    for (let i = 0; i < timestamp_list.length; ++i) {
        object_list.push(
            new Sihdata(timestamp_list[i], camera_no_list[i], regex_string_list[i], image_link_list[i])
        );
    }

    // Put the backend data into the Sihdata object



    // return list of SIhdata objects.
    return object_list;
}


displayFrontend();


function parseDOM(){
    let parser = new DOMParser();


    let parsedString = parser.parseFromString("<div> Hello i am parsed </div>","text/html");

    console.log(parsedString);

    
    console.log(parsedString.body.childNodes[0].textContent);
}


parseDOM();

document.addEventListener('DOMContentLoaded',initializeModal);