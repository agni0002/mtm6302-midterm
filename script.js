function loadStories() {
    for (let i = 0; i < stories.length; i++) {
        document.getElementById("stories").innerHTML += `<li id="${i}" class="list-group-item red-on-hover m-3 p-3 border border-2 rounded">${stories[i].title}</h1>`;
    }
    document.getElementById("0").addEventListener("click", function(){
        // hide nav
        document.getElementById("stories").style.display = "none";
        document.getElementById("mission-statement-form").style.display = "block";
    
        for (let i = 0; i < stories[0].words.length; i++) {
            document.getElementById("form").innerHTML += `<input class="form-control m-3" type="text" id="0-${i}" placeholder="${stories[0].words[i]}" />`;   
        }
    
        document.getElementById("lunch-btn").style.display = "none";
        document.getElementById("weather-btn").style.display = "none";
    });
    
    document.getElementById("1").addEventListener("click", function(){
        // hide nav
        document.getElementById("stories").style.display = "none";
        document.getElementById("mission-statement-form").style.display = "block";
        
        for (let i = 0; i < stories[1].words.length; i++) {
            document.getElementById("form").innerHTML += `<input class="form-control m-3" type="text" id="1-${i}" placeholder="${stories[1].words[i]}" />`;   
        }
        document.getElementById("mission-statement-btn").style.display = "none";
        document.getElementById("weather-btn").style.display = "none";
    });
    
    document.getElementById("2").addEventListener("click", function(){
        // hide nav
        document.getElementById("stories").style.display = "none";
        document.getElementById("mission-statement-form").style.display = "block";
        
        for (let i = 0; i < stories[2].words.length; i++) {
            document.getElementById("form").innerHTML += `<input class="form-control m-3" type="text" id="2-${i}" placeholder="${stories[2].words[i]}" />`;   
        }
    
        document.getElementById("mission-statement-btn").style.display = "none";
        document.getElementById("lunch-btn").style.display = "none";
    });
}
loadStories();




document.getElementById("mission-statement-btn").addEventListener("click", function() {
    let words = {
        'Adjective': document.getElementById("0-0").value,
        'Verb 1': document.getElementById("0-1").value,
        'Verb 2': document.getElementById("0-2").value,
        'Plural Noun 1': document.getElementById("0-3").value,
        'Plural Noun 2': document.getElementById("0-4").value,
        'Plural Noun 3': document.getElementById("0-5").value
    }
    document.getElementById("stories").style.display = "block";
    document.getElementById("stories").innerHTML = "";  
    
    document.getElementById("mission-statement-form").innerHTML = stories[0].output(words);
    document.getElementById("mission-statement-form").innerHTML += `<button class="btn btn-info" id="new-story">Create a new story</button>`;
    document.getElementById("new-story").addEventListener("click", function() {
    
        location.reload();
    })
})

document.getElementById("lunch-btn").addEventListener("click", function() {
    let words = {
        'Animal':  document.getElementById("1-0").value,
        'Adjective 1': document.getElementById("1-1").value,
        'Adjective 2': document.getElementById("1-2").value,
        'Vegetable 1': document.getElementById("1-3").value,
        'Vegetable 2': document.getElementById("1-4").value,
        'Noun': document.getElementById("1-5").value,
        'Container': document.getElementById("1-6").value
    }
    document.getElementById("stories").style.display = "block";
    document.getElementById("stories").innerHTML = "";  
    document.getElementById("mission-statement-form").innerHTML = stories[1].output(words);
    document.getElementById("mission-statement-form").innerHTML += `<button class="btn btn-info" id="new-story">Create a new story</button>`;
    document.getElementById("new-story").addEventListener("click", function() {
        
        location.reload();
    })
})

document.getElementById("weather-btn").addEventListener("click", function() {
    let words = {
        'Adjective 1': document.getElementById("2-0").value,
        'Adjective 2': document.getElementById("2-1").value,
        'Article of Clothing': document.getElementById("2-2").value,
        'Number 1': document.getElementById("2-3").value,
        'Number 2': document.getElementById("2-4").value,
        'Plural Noun 1': document.getElementById("2-5").value,
        'Plural Noun 2': document.getElementById("2-6").value
    }
    document.getElementById("stories").innerHTML = "";  
    document.getElementById("stories").style.display = "block";
    document.getElementById("mission-statement-form").innerHTML = stories[2].output(words);
    document.getElementById("mission-statement-form").innerHTML += `<button class="btn btn-info" id="new-story">Create a new story</button>`;
    document.getElementById("new-story").addEventListener("click", function() {
        
        location.reload();
    })
})



