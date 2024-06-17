
const div = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {

    div.innerHTML = `
    
    <div class='color'>

    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>

        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>

</div>`
})