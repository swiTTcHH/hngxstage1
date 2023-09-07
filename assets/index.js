const ids = document.querySelectorAll("[data-testid]");

        ids.forEach(id => {
            let today = new Date();
            if (id.dataset.testid === "currentDayOfTheWeek"){
                id.innerHTML = today.toUTCString();
            }
            
        })