var notes, count = 0;
function load() {
    var notes = localStorage.getItem("notes");
    if (notes) {
        var list = JSON.parse(notes);
        var i;
        count = list.length;
        for (i = 0; i < count; i++) {
            var note = list[i];
            show(note.Title, note.Content);
        }
    }
}

function show(title, note) {
	notes.append("<li><article>" + 
					"<textarea class='title' placeholder='Title' onblur='save()'></textarea>" + 
					"<textarea class='note' placeholder='Note Here' onblur='save()'></textarea>" + 
					"<img class='close' src='images/close.png'/>" + 
					"</article></li>");
    var lastNote = notes.find("li:last");
	lastNote.find("img").click(function () {
	    lastNote.remove();
        save();
	});
	if (title) {
		lastNote.find("textarea.title").val(title);
    }
	if (note) {
		lastNote.find("textarea.note").val(note);
    }
    console.log("vt---show");
}

function save() {
    var list = [];
    notes.find("li > article").each(function (i, note) {
        var title = $(note).find("textarea.title");
        var content = $(note).find("textarea.note");
                list.push({ Index: i, Title: title.val(), Content: content.val() });
            });
    var noteJSON = JSON.stringify(list);
    localStorage.setItem("notes", noteJSON);
    console.log("vt---save");
    return;
}