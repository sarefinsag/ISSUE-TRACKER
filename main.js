// document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

// function submitIssue(e) {
//   const getInputValue = id => document.getElementById(id).value;
//   const description = getInputValue('issueDescription');
//   const severity = getInputValue('issueSeverity');
//   const assignedTo = getInputValue('issueAssignedTo');
//   if(!isNaN(description) || !isNaN(assignedTo)){
//     alert('You can not contain only numbers or whitespaces!');
//   }
//   else{
//     const id = Math.floor(Math.random()*100000000) + '';
//     const status = true;

//   const issue = { id, description, severity, assignedTo, status };
//   let issues = [];
//   if (localStorage.getItem('issues')){
//     issues = JSON.parse(localStorage.getItem('issues'));
//   }
//   issues.push(issue);
//   localStorage.setItem('issues', JSON.stringify(issues));

//   fetchIssues();
//   e.preventDefault();
// }
//   document.getElementById('issueInputForm').reset();
// }

// const closeIssue = id => {
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const currentIssue = issues.find(issue => parseInt(issue.id) === id);
//   currentIssue.status = !currentIssue.status;
//   localStorage.setItem('issues', JSON.stringify(issues));
//   fetchIssues();
// }

// const deleteIssue = id => {
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const remainingIssues = issues.filter(issue => id !== parseInt(issue.id));
//   localStorage.setItem('issues', JSON.stringify(remainingIssues));
//   fetchIssues();
// }

// const fetchIssues = () => {
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const issuesList = document.getElementById('issuesList');
//   issuesList.innerHTML = '';

//   let [totalIssues, remainingIssues] = [issues.length, 0];
//   if(issues){
//     for (var i = 0; i < issues.length; i++) {
//       const {id, description, severity, assignedTo, status} = issues[i];

//       let result, descriptionStyle, updateBtnColor, updateBtnText;

//       if(status){
//         result = 'Open';
//         descriptionStyle = description;
//         updateBtnColor = 'btn-warning';
//         updateBtnText = 'Close';
//         remainingIssues++;
//       }
//       else{
//         result = 'Closed';
//         descriptionStyle = `<strike>${description}</strike>`;
//         updateBtnColor = 'btn-success';
//         updateBtnText = 'Open';
//       }
//       issuesList.innerHTML +=   `<div class="well">
//                                 <h6>Issue ID: ${id} </h6>
//                                 <p><span class="label label-info"> ${result} </span></p>
//                                 <h3> ${description} </h3>
//                                 <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
//                                 <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
//                                 <a href="#" onclick="setStatusClosed(${id})" class="btn btn-warning">Close</a>
//                                 <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
//                                 </div>`;
//     }

//     const issueCounter = document.getElementById('issue-counter');
//     issueCounter.innerText = totalIssues;
//       ? `${remainingIssues}(${totalIssues})`
//       : '';
//   }
// }



// const fetchIssues = () => {
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const issuesList = document.getElementById('issuesList');
//   issuesList.innerHTML = '';

//   let [totalIssues, remainingIssues] = [issues.length, 0];

//   if (issues) {
//     for (var i = 0; i < issues.length; i++) {
//       const { id, description, severity, assignedTo, status } = issues[i];

//       let result, descriptionStyle, updateBtnColor, updateBtnText;

//       if (status) {
//         result = 'Open';
//         descriptionStyle = description;
//         updateBtnColor = 'btn-warning';
//         updateBtnText = 'Close';
//         remainingIssues++;
//       } else {
//         result = 'Closed';
//         descriptionStyle = `<strike>${description}</strike>`;
//         updateBtnColor = 'btn-success';
//         updateBtnText = 'Open';
//       }

//       issuesList.innerHTML += `<div class="well">
//                                 <h6>Issue ID: ${id} </h6>
//                                 <p><span class="label label-info"> ${result}</span></p>
//                                 <h3 style="overflow-wrap: break-word;"> ${descriptionStyle} </h3>
//                                 <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
//                                 <p style="overflow-wrap: break-word;"><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
//                                 <a onclick="updateIssue(${id})" class="btn ${updateBtnColor}">${updateBtnText}</a>
//                                 <a onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
//                                 </div>`;
//     }

//     const issueCounter = document.getElementById('issue-counter');
//     issueCounter.innerText = totalIssues
//       ? `${remainingIssues}(${totalIssues})`
//       : '';
//   }
// };



document.getElementById("issueInputForm").addEventListener("submit", submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue("issueDescription");
  const severity = getInputValue("issueSeverity");
  const assignedTo = getInputValue("issueAssignedTo");
  if (!isNaN(description) || !isNaN(assignedTo)) {
    alert("Your input can not contain only numbers or whitespaces!");
  } else {
    const id = Math.floor(Math.random() * 100000000) + "";
    const status = true;

    const issue = { id, description, severity, assignedTo, status };
    let issues = [];
    if (localStorage.getItem("issues")) {
      issues = JSON.parse(localStorage.getItem("issues"));
    }
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));

    fetchIssues();
    e.preventDefault();
  }
  document.getElementById("issueInputForm").reset();
}

const updateIssue = id => {
  const issues = JSON.parse(localStorage.getItem("issues"));
  const currentIssue = issues.find(issue => parseInt(issue.id) === id);
  currentIssue.status = !currentIssue.status;
  localStorage.setItem("issues", JSON.stringify(issues));
  fetchIssues();
};

const deleteIssue = id => {
  const issues = JSON.parse(localStorage.getItem("issues"));
  const remainingIssues = issues.filter(issue => id !== parseInt(issue.id));
  localStorage.setItem("issues", JSON.stringify(remainingIssues));
  fetchIssues();
};

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem("issues"));
  const issuesList = document.getElementById("issuesList");
  issuesList.innerHTML = "";

  let [totalIssues, remainingIssues] = [issues.length, 0];

  if (issues) {
    for (var i = 0; i < issues.length; i++) {
      const { id, description, severity, assignedTo, status } = issues[i];

      let result, descriptionStyle, updateBtnColor, updateBtnText;

      if (status) {
        result = "Open";
        descriptionStyle = description;
        updateBtnColor = "btn-warning";
        updateBtnText = "Close";
        remainingIssues++;
      } else {
        result = "Closed";
        descriptionStyle = `<strike>${description}</strike>`;
        updateBtnColor = "btn-success";
        updateBtnText = "Open";
      }

      issuesList.innerHTML += `<div class="well">
                                <h6>Issue ID: ${id} </h6>
                                <p><span class="label label-info"> ${result}</span></p>
                                <h3 style="overflow-wrap: break-word;"> ${descriptionStyle} </h3>
                                <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                                <p style="overflow-wrap: break-word;"><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                                <a onclick="updateIssue(${id})" class="btn ${updateBtnColor}">${updateBtnText}</a>
                                <a onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
                                </div>`;
    }

    const issueCounter = document.getElementById("issue-counter");
    issueCounter.innerText = totalIssues
      ? `${remainingIssues}(${totalIssues})`
      : "";
  }
};