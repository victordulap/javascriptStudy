// ��� ������������� ������������ ������� ���������
// ����-����� �� ���� �������� � ����������� �����
// 3 ����. ������ ������������ ���� �� ���������
// 12 ��/�, � ������ � 14 ��/�. �� ����� ����������
// ��������� �������?

var calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
    // ��������
    // 1. ����� ����������, ������� ������� ������
    //    ������������, ������� �������� �� �����
    var distanceOfFirstCyclist = speedOfFirstCyclist * time;
    
    // 2. ����� ����������, ������� ������� ������
    //    ������������
    var distanceOfSecondCyclist = speedOfSecondCyclist * time;
    
    // 3. ������� ���������� ����������
    var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
    
    return totalDistance;
};

var measureUnit = '��';
console.log('���������� ����� ������� ���������: ' + calculateDistance(3, 12, 14) + measureUnit);
console.log('���������� ����� ������� ���������: ' + calculateDistance(5, 1, 2) + measureUnit);
