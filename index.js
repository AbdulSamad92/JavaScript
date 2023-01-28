var percentage = prompt ("Enter your percentage")
function percent () {
    if(percentage < 40){'Fail'}
    else if(percentage >= 40 && percentage < 50){'D'}
    else if(percentage >= 50 && percentage < 60){'C'}
    else if(percentage >= 60 && percentage < 70){'B'}
    else if(percentage >= 70 && percentage < 80){'A'}
    else(percentage >= 80){'A+'}
}
alert (percentage)
