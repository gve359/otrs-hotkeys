// ==UserScript==
// @name         Горячие клавиши для OTRS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://helpdesk.comandor.local/otrs/*
// @grant        none
// ==/UserScript==


(function() {
//Закрытие
var element = document.getElementById("nav-Close").getElementsByTagName("a")[0];

var prompt = element.getAttribute('title');
element.setAttribute('title', prompt + ' (z)');

var hotkey = document.createAttribute("accesskey");
hotkey.value = "z";
element.setAttributeNode(hotkey);



//Заметка
var element = document.getElementById("nav-Note").getElementsByTagName("a")[0];

var prompt = element.getAttribute('title');
element.setAttribute('title', prompt + ' (i)');

var hotkey = document.createAttribute("accesskey");
hotkey.value = "i";
element.setAttributeNode(hotkey);
})();


//Устанавиливается в плагины
// Greasemonkey для firefox
// Tampermonkey для chrome


//chrome   alt + hotkey
//firefox   alt + shift + hotkey

//Оригинальные хоткеи
//accesskey="g" Ответ в окне открытия или ответа.
//accesskey="" title="Заблокированные заявки: Новые: 1">Заблокированные заявки: Новые <i class="icon-small fa fa-clock-o icon-show-reached"></i> <i class="icon-small fa fa-star icon-show-new"></i><i class="fa fa-lock"></i> <span class="Counter">1</span> </a></li>
//accesskey="k" title="Заблокированные заявки: Всего: 8 (k)">Заблокированные заявки: Всего <i class="icon-small fa fa-clock-o icon-show-reached"></i> <i class="icon-small fa fa-star icon-show-new"></i><i class="fa fa-lock"></i> <span class="Counter">8</span> </a></li>
//accesskey="d" >Дайджест</a>
//accesskey="t" >Заявки</a>
//accesskey="o" >Просмотр очередей</a>
//accesskey="O" >Обзор сервисов</a>
//accesskey="v" >Просмотр статусов</a>
//accesskey="e" >Просмотр эскалированных заявок</a>
//accesskey="n" >Новая телефонная заявка</a>
//accesskey="m" >Новая заявка по email</a>
//accesskey="s" onclick="window.setTimeout(function(){Core.Agent.Search.OpenSearchDialog('AgentTicketSearch');}, 0); return false;">Поиск</a>
//accesskey="c" >Клиенты</a>
//accesskey="c" onclick="window.setTimeout(function(){Core.Agent.CustomerInformationCenterSearch.OpenSearchDialog();}, 0); return false;">Информация о клиенте</a>
//accesskey="F" >FAQ</a>
//accesskey="X" >Обзор</a>
//accesskey="A" >Новое</a>
//accesskey="J" >Журнал</a>
//accesskey="S" onclick="Core.Agent.Search.OpenSearchDialog('AgentFAQSearch'); if (event.stopPropagation) { event.stopPropagation(); } else { window.event.cancelBubble = true; } return false;">Поиск</a>
//accesskey="g" Ответ в окне открытия или ответа.


