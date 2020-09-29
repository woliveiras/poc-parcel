import { select, text } from '@storybook/addon-knobs'

export default () => ({
  primary: {
    header: select('header', {
      yes: 'yes',
      no: 'no'
    },
    'no'),
    large: select('large', {
      yes: 'yes',
      no: 'no'
    },
    'no'),
    highlight: select('highlight', {
      yes: 'yes',
      no: 'no'
    },
    'no'),
    table: text('Tabela (HTML)', `
      <table>
        <thead>
            <tr>
              <td> Pacote </td>
              <td> Canais </td>
              <td> Valor </td>
              <td> Ligue Grátis </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Mix Digital </td>
                <td> 132 canais – Assine no Combo e ganhe mais vantagens </td>
                <td><strong> R$ 79,90 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
            <tr>
                <td> Mix Digital + Telecine </td>
                <td> 141 canais – Assine no Combo e ganhe mais vantagens </td>
                <td><strong> R$ 109,90 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
            <tr>
                <td> Mix Digital + HBO </td>
                <td> 142 canais – Assine no Combo e ganhe mais vantagens </td>
                <td><strong> R$ 109,90 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
            <tr>
                <td> Mix Digital + Cinema </td>
                <td> 147 canais – Incluindo Telecines e Canais HBO [Inclui 1 Ponto Adicional] </td>
                <td><strong> R$ 139,90 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
            <tr>
                <td> Mix Digital + Futebol </td>
                <td> 142 canais – Diversos Canais Premiere [Inclui 1 Ponto Adicional] </td>
                <td><strong> R$ 199,80 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
            <tr>
                <td> Mix Digital + HBO + Futebol </td>
                <td> 150 canais – Diversos Canais Premiere [Inclui 1 Ponto Adicional] </td>
                <td><strong> R$ 229,80 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
            <tr>
                <td> Mix Digital + Telecine + Futebol </td>
                <td> 146 canais – Diversos Canais Premiere [Inclui 1 Ponto Adicional] </td>
                <td><strong> R$ 229,80 </strong></td>
                <td> 📞 <a href="tel:0800 738 0020"> 0800 738 0020 </a></td>
            </tr>
        </tbody>
      </table>`),
    legal: text('Legenda', '*os preços estão sujeitos a alteração sem aviso prévio')
  }
})
