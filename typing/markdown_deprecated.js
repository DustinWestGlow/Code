for (var i in letters) {
    if (e.key == letters[i]) {
        content += e.key;
    }
}
e.preventDefault();
if (e.key == "Backspace")
{
    content = content.substring(0, content.length - 1);
}
} else if (e.key == ' ') {
    content += ' ';
} else {
else
{