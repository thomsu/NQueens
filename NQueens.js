var nQueens = function (size, position) {
    var solution = [ position ];
    function chessBoard (size, position) {
        this.size = size;
        this.board = [];
        [...Array(this.size).keys()].forEach(() => this.board.push(Array(size).fill(false)));
        var col = position.charCodeAt(0) - 'a'.charCodeAt(0);
        var row = position[1];
        this.board[row][col] = true;

        this.createDiagonal = function(topleft, topright, bottomleft, bottomright, checkList) {
            if (topleft[0] - 1 >= 0 && topleft[1] - 1 >= 0) {
                var tlr = topleft[0] - 1;
                var tlc = topleft[1] - 1;
                if (!this.board[tlr][tlc]) {
                    checkList.push([tlr, tlc]);
                } else {checkList.push(null;}
            if (topright[0] - 1 >= 0 && topright[1] + 1 <= this.size) {
                var trr = topright[0] - 1;
                var trc = topright[1] + 1;
                if (!this.board[trr][trc]) {
                    checkList.push([trr, trc]);
                } else {checkList.push(null;}
            if (bottomleft[0] + 1 <= this.size && bottomleft[1] - 1 >= 0) {
                var blr = bottomleft[0] + 1;
                var blc = bottomleft[1] - 1;
                if (!this.board[blr][blc]) {
                    checkList.push([blr, blc]);
                } else {checkList.push(null;}
            if (bottomright[0] + 1 <= this.size && bottomright[1] + 1 <= this.size) {
                var brr = bottomright[0] + 1;
                var brc = bottomright[1] + 1;
                if (!this.board[brr][brc]) {
                    checkList.push([brr, brc]);
                } else {checkList.push(null;}
        }

        this.checkValid = function (position) {
            var rowVerify = this.board[position[0]].reduce((sum, num) => sum + num);
            if (rowVerify !== 0) return false;
            var colVerify = this.board.map(row => row[position[1]]).reduce((sum, num) => sum + num);
            if (rowVerify !== 0) return false;
            var checkList = [];
            this.createDiagonal(position, position, position, position, checkList);
            for (let i of [...Array(this.size-1).keys()]) {
                this.createDiagonal(checkList[0], checkList[1], checkList[2], checkList[3], checkList);
                if (checkList.some(corner => corner == null)) {
                    return false;
                }
            } return true;
            }
        }
    }

}
