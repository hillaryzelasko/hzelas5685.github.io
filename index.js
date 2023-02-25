let package_i = document.getElementById('package_i');

function changeColor() { package_i.style.width = '110%' }
function reset() { package_i.style.width = ''}

package_i.addEventListener('mouseover', changeColor)
package_i.addEventListener('mouseout', reset)

