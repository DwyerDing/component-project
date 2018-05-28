// 转换器

class Converter {
  bitToNumber (size, type, digit) {
    if (isNaN(parseFloat(size))) {
      return size;
    }
    type = type ? type.toUpperCase() : 'B';
    size = parseInt(size) || 0;
    digit = parseInt(digit) || 2;

    var unit = ['B', 'KB', 'MB', 'GB', 'TB'];

    for (var i = 0; i < 5; i++) {
      if (unit[i] === type && size >= 1024) {
        size /= 1024;
        type = unit[i + 1];
      }
    }

    return parseFloat(size.toFixed(digit)) + type;
  }
}
