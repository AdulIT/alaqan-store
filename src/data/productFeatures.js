import shieldImg from '../assets/img/productFeatures/shields.svg'
import lightningImg from '../assets/img/productFeatures/lightning.svg'
import fireAlarmImg from '../assets/img/productFeatures/alarm.svg'

import scanningImg from '../assets/img/productFeatures/scanning.png'
import padlockImg from '../assets/img/productFeatures/padlock.svg'
import dartsImg from '../assets/img/productFeatures/darts.svg'

const productFeatures = [
    {
        frontTitle: 'Качество материалов',
        img: shieldImg,
        backTitle: 'Корпус из нержавеющей стали',
        backText: 'Турникет имеет долговечный ресурс благодаря стали SUS304, использующийся для создания прочного корпуса.',
    },
    {
        frontTitle: 'Скорость работы',
        img: lightningImg,
        backTitle: 'Скорость работы',
        backText: 'Высокая пропускная способность ~30 проходов в минуту.',
    },
    {
        frontTitle: 'Аварийная система',
        img: fireAlarmImg,
        backTitle: 'Аварийная система',
        backText: 'Планки «анти-паника». Во время экстренных ситуаций и отключения электроэнергии рукоятки турникета опускаются, чтобы позволить людям быстро и безопасно покинуть территорию.',
    },
]

const scanerProductFeatures = [
    {
        frontTitle: 'Бесконтактное сканирование',
        img: scanningImg,
        backTitle: 'Забота о здоровье',
        backText: 'Alaqan не требует контакта с поверхностью. Технология препятствует распространению заболеваний.',
    },
    {
        frontTitle: 'Скорость считывания',
        img: lightningImg,
        backTitle: 'Скорость считывания',
        backText: 'Сканирование вен ладони происходит быстро - за 0,3 секунды. ',
    },
    {
        frontTitle: 'Точность сканирования',
        img: dartsImg,
        backTitle: 'Точность идентификации',
        backText: 'Вероятность того, что вас примут за другого человека - ~0.0001%. Вероятность ошибки распознания - ~0.068%.',
    },
    {
        frontTitle: 'Безопасность данных',
        img: padlockImg,
        backTitle: 'Шифрование',
        backText: 'Биометрия нигде не хранится. Рисунок вен зашифровывается в код без риска утечки данных.',
    },
]

export {productFeatures, scanerProductFeatures}