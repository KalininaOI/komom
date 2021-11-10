
if (browser === 'Edge') {
    alert( "You've got the Edge!" );
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert('Okay we support these browsers too');
}
    /// более подробный вариант:
    if (browser === 'Edge') {
        alert( "You've got the Edge!" );
    } else if (browser === 'Chrome') {
        alert( 'Okay we support these browsers too' );
    } else if (browser === 'Firefox') {
        alert( 'Okay we support these browsers too' );
    } else if (browser === 'Safari') {
        alert( 'Okay we support these browsers too' );
    } else if (browser === 'Opera') {
        alert( 'Okay we support these browsers too' );
    } else {
        alert('Okay we support these browsers too');
    }