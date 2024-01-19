import './table.css'

let alphabetBG = 'абвгдежзийклмнопрстуфхцчшщъьюя'


function lettersGenerator(): string[] {
    let result: string[] = [];

    for (let j = 0; j < 64; j++) {
        result.push(alphabetBG[Math.floor(Math.random() * 30)])
    }

    return result;
}

const letters: string[] = lettersGenerator()

const Square = () => {

    return (
        // 8 x 8 Square
        <div className='game_board'>
            <table className='default_table'>
                <tbody>
                    <tr>
                        <td id="t00" className="default_cells">{letters[0]}</td>
                        <td id="t01" className="default_cells">{letters[1]}</td>
                        <td id="t02" className="default_cells">{letters[2]}</td>
                        <td id="t03" className="default_cells">{letters[3]}</td>
                        <td id="t04" className="default_cells">{letters[4]}</td>
                        <td id="t05" className="default_cells">{letters[5]}</td>
                        <td id="t06" className="default_cells">{letters[6]}</td>
                        <td id="t07" className="default_cells">{letters[7]}</td>
                    </tr>
                    <tr>
                        <td id="t10" className="default_cells">{letters[8]}</td>
                        <td id="t11" className="default_cells">{letters[9]}</td>
                        <td id="t12" className="default_cells">{letters[10]}</td>
                        <td id="t13" className="default_cells">{letters[11]}</td>
                        <td id="t14" className="default_cells">{letters[12]}</td>
                        <td id="t15" className="default_cells">{letters[13]}</td>
                        <td id="t16" className="default_cells">{letters[14]}</td>
                        <td id="t17" className="default_cells">{letters[15]}</td>
                    </tr>
                    <tr>
                        <td id="t21" className="default_cells">{letters[16]}</td>
                        <td id="t20" className="default_cells">{letters[17]}</td>
                        <td id="t22" className="default_cells">{letters[18]}</td>
                        <td id="t23" className="default_cells">{letters[19]}</td>
                        <td id="t24" className="default_cells">{letters[20]}</td>
                        <td id="t25" className="default_cells">{letters[21]}</td>
                        <td id="t26" className="default_cells">{letters[22]}</td>
                        <td id="t27" className="default_cells">{letters[23]}</td>
                    </tr>
                    <tr>
                        <td id="t30" className="default_cells">{letters[24]}</td>
                        <td id="t31" className="default_cells">{letters[25]}</td>
                        <td id="t32" className="default_cells">{letters[26]}</td>
                        <td id="t33" className="default_cells">{letters[27]}</td>
                        <td id="t34" className="default_cells">{letters[28]}</td>
                        <td id="t35" className="default_cells">{letters[29]}</td>
                        <td id="t36" className="default_cells">{letters[30]}</td>
                        <td id="t37" className="default_cells">{letters[31]}</td>
                    </tr>
                    <tr>
                        <td id="t41" className="default_cells">{letters[32]}</td>
                        <td id="t40" className="default_cells">{letters[33]}</td>
                        <td id="t42" className="default_cells">{letters[34]}</td>
                        <td id="t43" className="default_cells">{letters[35]}</td>
                        <td id="t44" className="default_cells">{letters[36]}</td>
                        <td id="t45" className="default_cells">{letters[37]}</td>
                        <td id="t46" className="default_cells">{letters[38]}</td>
                        <td id="t47" className="default_cells">{letters[39]}</td>
                    </tr>
                    <tr>
                        <td id="t50" className="default_cells">{letters[40]}</td>
                        <td id="t51" className="default_cells">{letters[41]}</td>
                        <td id="t52" className="default_cells">{letters[42]}</td>
                        <td id="t53" className="default_cells">{letters[43]}</td>
                        <td id="t54" className="default_cells">{letters[44]}</td>
                        <td id="t55" className="default_cells">{letters[45]}</td>
                        <td id="t56" className="default_cells">{letters[46]}</td>
                        <td id="t57" className="default_cells">{letters[47]}</td>
                    </tr>
                    <tr>
                        <td id="t60" className="default_cells">{letters[48]}</td>
                        <td id="t61" className="default_cells">{letters[49]}</td>
                        <td id="t62" className="default_cells">{letters[50]}</td>
                        <td id="t63" className="default_cells">{letters[51]}</td>
                        <td id="t64" className="default_cells">{letters[52]}</td>
                        <td id="t65" className="default_cells">{letters[53]}</td>
                        <td id="t66" className="default_cells">{letters[54]}</td>
                        <td id="t67" className="default_cells">{letters[55]}</td>
                    </tr>
                    <tr>
                        <td id="t70" className="default_cells">{letters[56]}</td>
                        <td id="t71" className="default_cells">{letters[57]}</td>
                        <td id="t72" className="default_cells">{letters[58]}</td>
                        <td id="t73" className="default_cells">{letters[59]}</td>
                        <td id="t74" className="default_cells">{letters[60]}</td>
                        <td id="t75" className="default_cells">{letters[61]}</td>
                        <td id="t76" className="default_cells">{letters[62]}</td>
                        <td id="t77" className="default_cells">{letters[63]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Square