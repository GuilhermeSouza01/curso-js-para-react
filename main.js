import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

const $htmlBoardGame = BoardGame(1);
const $htmlPlayerName = PlayerName();
$root.insertAdjacentHTML("beforebegin", $htmlPlayerName);
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);