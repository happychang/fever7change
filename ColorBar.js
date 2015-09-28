function ColorBar(value, area) {
    density = value / area / 10000;
    if (value <= 4 && value >= -4)
        return "#FFFF00"
    else if (density <= -256)
        return "#00bfff"
    else if (density <= -64)
        return "#87cefa"
    else if (density <= -16)
        return "#00CC00"
    else if (density <= -4)
        return "#00FF00"
    else if (density < 4)
        return "#ffd700"
    else if (density < 16)
        return "#FF8C00"
    else if (density < 64)
        return "#FF6600"
    else if (density < 256)
        return "#FF0000"
    else 
        return "#CC0000"

    //return "rgb("+r+","+g+","+b+")";
}
