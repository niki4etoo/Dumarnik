import './table.css'

const Square = () => {

    return (
        // 8 x 8 Square
        <div className='game_board'>
            <table className='default_table'>
                <tr>
                    <td id="t00" className="default_cells">а</td>
                    <td id="t01" className="default_cells">б</td>
                    <td id="t02" className="default_cells">в</td>
                    <td id="t03" className="default_cells">г</td>
                    <td id="t04" className="default_cells">д</td>
                    <td id="t05" className="default_cells">е</td>
                    <td id="t06" className="default_cells">ж</td>
                    <td id="t07" className="default_cells">з</td>
                </tr>
                <tr>
                    <td id="t10" className="default_cells">и</td>
                    <td id="t11" className="default_cells">й</td>
                    <td id="t12" className="default_cells">к</td>
                    <td id="t13" className="default_cells">л</td>
                    <td id="t14" className="default_cells">м</td>
                    <td id="t15" className="default_cells">н</td>
                    <td id="t16" className="default_cells">о</td>
                    <td id="t17" className="default_cells">п</td>
                </tr>
                <tr>
                    <td id="t20" className="default_cells">р</td>
                    <td id="t21" className="default_cells">с</td>
                    <td id="t22" className="default_cells">т</td>
                    <td id="t23" className="default_cells">у</td>
                    <td id="t24" className="default_cells">ф</td>
                    <td id="t25" className="default_cells">х</td>
                    <td id="t26" className="default_cells">ц</td>
                    <td id="t27" className="default_cells">ч</td>
                </tr>
                <tr>
                    <td id="t30" className="default_cells">ш</td>
                    <td id="t31" className="default_cells">щ</td>
                    <td id="t32" className="default_cells">ь</td>
                    <td id="t33" className="default_cells">ю</td>
                    <td id="t34" className="default_cells">я</td>
                    <td id="t35" className="default_cells">г</td>
                    <td id="t36" className="default_cells">в</td>
                    <td id="t37" className="default_cells">а</td>
                </tr>
                <tr>
                    <td id="t41" className="default_cells">б</td>
                    <td id="t40" className="default_cells">а</td>
                    <td id="t42" className="default_cells">е</td>
                    <td id="t43" className="default_cells">о</td>
                    <td id="t44" className="default_cells">п</td>
                    <td id="t45" className="default_cells">р</td>
                    <td id="t46" className="default_cells">с</td>
                    <td id="t47" className="default_cells">т</td>
                </tr>
                <tr>
                    <td id="t50" className="default_cells">у</td>
                    <td id="t51" className="default_cells">а</td>
                    <td id="t52" className="default_cells">п</td>
                    <td id="t53" className="default_cells">я</td>
                    <td id="t54" className="default_cells">з</td>
                    <td id="t55" className="default_cells">ъ</td>
                    <td id="t56" className="default_cells">в</td>
                    <td id="t57" className="default_cells">т</td>
                </tr>
                <tr>
                    <td id="t60" className="default_cells">з</td>
                    <td id="t61" className="default_cells">в</td>
                    <td id="t62" className="default_cells">г</td>
                    <td id="t63" className="default_cells">д</td>
                    <td id="t64" className="default_cells">д</td>
                    <td id="t65" className="default_cells">и</td>
                    <td id="t66" className="default_cells">й</td>
                    <td id="t67" className="default_cells">к</td>
                </tr>
                <tr>
                    <td id="t70" className="default_cells">л</td>
                    <td id="t71" className="default_cells">о</td>
                    <td id="t72" className="default_cells">ю</td>
                    <td id="t73" className="default_cells">я</td>
                    <td id="t74" className="default_cells">г</td>
                    <td id="t75" className="default_cells">о</td>
                    <td id="t76" className="default_cells">д</td>
                    <td id="t77" className="default_cells">а</td>
                </tr>
            </table>
        </div>
    )
}

export default Square