let package_i = document.getElementById('package_i');
let package_ii = document.getElementById('package_ii')
let package_iii = document.getElementById('package_iii')

function changeSizePackage_I() { 
    package_i.style.width = '110%';
    package_ii.style.width = '90%';
    package_iii.style.width = '90%';

}
function changeSizePackage_II() { 
    package_i.style.width = '90%';
    package_ii.style.width = '110%';
    package_iii.style.width = '90%';

}
function changeSizePackage_III() { 
    package_i.style.width = '90%';
    package_ii.style.width = '90%';
    package_iii.style.width = '110%';

}

function reset() { 
    package_i.style.width = '';
    package_ii.style.width = '';
    package_iii.style.width = '';
}

package_i.addEventListener('mouseover', changeSizePackage_I)
package_i.addEventListener('mouseout', reset)

package_ii.addEventListener('mouseover', changeSizePackage_II)
package_ii.addEventListener('mouseout', reset)

package_iii.addEventListener('mouseover', changeSizePackage_III)
package_iii.addEventListener('mouseout', reset)
