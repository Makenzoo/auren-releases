# AUREN для кафе

POS, Back Office и сервисные страницы AUREN открываются в браузере и публикуются на Vercel. Отдельные настольные приложения для кассира и администратора сейчас не распространяются.

## Локальный сервер кафе

AUREN Server хранит рабочие данные кафе и связывает устройства в локальной сети. Для пилота доступны сборки Windows и Mac:

- [Открыть релиз AUREN Server 1.4.47 (pilot)](https://github.com/Makenzoo/auren-releases/releases/tag/server-v1.4.47)
- Windows x64: [установщик](https://github.com/Makenzoo/auren-releases/releases/download/server-v1.4.47/auren-server-1.4.47-windows-x64.exe) · [SHA-256](https://github.com/Makenzoo/auren-releases/releases/download/server-v1.4.47/auren-server-1.4.47-windows-x64.exe.sha256)
- Mac Apple Silicon: [архив приложения](https://github.com/Makenzoo/auren-releases/releases/download/server-v1.4.47/auren-server-1.4.47-macos-arm64.zip) · [SHA-256](https://github.com/Makenzoo/auren-releases/releases/download/server-v1.4.47/auren-server-1.4.47-macos-arm64.zip.sha256)

**Важно:** версия 1.4.47 — неподписанная пилотная сборка для контролируемой проверки. Она ещё не одобрена для коммерческой установки в кафе. Перед продажей нужны проверка на целевом компьютере, доверенная подпись установщиков и приёмочные испытания оборудования и работы без интернета.

При оплате через Kaspi Smart POS кассир отмечает подтверждённый терминалом платёж в AUREN. Терминальный слип не заменяет фискальный чек: для фискализации кафе должна отдельно использовать Kaspi Кассу или зарегистрированную ККМ.
