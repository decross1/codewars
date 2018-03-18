function songDecoder(song) {
    var split = song.split('WUB');
    var result = [];

    for (var i = 0; i < split.length; i++) {
        var el = split[i];
        var next = split[i + 1];

        if (el !== '') {
            result.push(el);
        } else if (el === '' && next === '') {
            continue;
        }
    }

    return result.join(' ');
}