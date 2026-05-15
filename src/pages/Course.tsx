import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

const fears = [
  {
    icon: 'Mail',
    title: 'Социальная инженерия (Фишинг)',
    text: 'Вас не взламывают технически — вас «взламывают» психологически. Злоумышленники присылают письма от имени директора, банка или госорганов, чтобы вы добровольно отдали им доступ.',
  },
  {
    icon: 'Bug',
    title: 'Вредоносное ПО (Вирусы/Шифровальщики)',
    text: 'Скрытая программа шифрует все файлы на сервере и требует выкуп (обычно в криптовалюте). Без резервных копий вернуть данные практически невозможно.',
  },
  {
    icon: 'UserX',
    title: 'Инсайдеры и «человеческий фактор»',
    text: 'Сотрудник записал пароль на стикер и прилепил к монитору, потерял ноутбук или случайно переслал конфиденциальный файл не туда. 80% утечек происходят по вине персонала, а не хакеров.',
  },
]

const rules = [
  {
    icon: 'ShieldCheck',
    title: 'Двухфакторная аутентификация (2FA) везде, где можно',
    text: 'Особенно в почте, CRM и VPN. Вам мало знать пароль — нужно подтвердить вход через телефон.',
  },
  {
    icon: 'Link',
    title: 'Никогда не переходите по ссылкам из подозрительных писем',
    text: 'Даже если письмо пришло от «отдела кадров» или «техподдержки». Проверяйте адрес отправителя (домен) и наводите курсор на ссылку, чтобы увидеть реальный адрес.',
  },
  {
    icon: 'Lock',
    title: 'Не оставляйте рабочий ноутбук без блокировки',
    text: 'При отходе от стола даже на минуту нажимайте Win + L. Чужая флешка, подключённая в ваше отсутствие — это шпионская программа.',
  },
  {
    icon: 'KeyRound',
    title: 'Пароль «qwerty123» — не пароль, а приглашение',
    text: 'Используйте менеджеры паролей (Bitwarden, KeePass, 1Password). Храните в голове только один мастер-пароль.',
  },
  {
    icon: 'Smartphone',
    title: 'Личные устройства (BYOD) — вне зоны доступа к рабочим сетям',
    text: 'Не соединяйте личный смартфон по USB к рабочему ПК и не раздавайте с него интернет на ноутбук с отчётами.',
  },
]

const alarmSteps = [
  {
    num: '01',
    title: 'Отключите устройство от сети',
    text: 'Выдерните LAN-кабель, отключите Wi-Fi. Это остановит дальнейшее распространение вируса или кражу данных.',
  },
  {
    num: '02',
    title: 'Не выключайте компьютер!',
    text: 'Опытные вирусы могут стереть следы или зашифроваться. Пусть он остаётся в том состоянии, в котором есть.',
  },
  {
    num: '03',
    title: 'Сообщите ответственному за ИБ или руководителю',
    text: 'Не пытайтесь скрыть инцидент из страха наказания. Сокрытие утечки влечёт многомиллионные штрафы (по ст. 13.11 КоАП РФ).',
  },
  {
    num: '04',
    title: 'Смените пароли от всех аккаунтов',
    text: 'Доступ к которым мог быть утерян, с другого чистого устройства (например, с домашнего ПК или телефона).',
  },
]

const techMin = [
  'Антивирус с EDR-функциями (не бесплатная версия, а корпоративная защита рабочих станций).',
  'Резервное копирование по правилу 3-2-1: 3 копии данных, на 2 разных носителях, 1 из них — физически за пределами офиса (облако).',
  'Изоляция сети: вся АТС, камеры и принтеры должны быть в отдельной сети (VLAN), не имеющей доступа к серверам с бухгалтерией.',
]

const fines = [
  { label: 'Для должностных лиц', value: 'Штраф до 1,2 млн рублей' },
  { label: 'Для юридических лиц', value: 'До 15 млн руб. или до 3% годовой выручки' },
  { label: 'Уголовная ответственность', value: 'До 10 лет колонии за кражу крупных баз данных' },
]

const faq = [
  {
    q: 'Я фрилансер. Действительно ли меня могут взломать «просто так»?',
    a: 'Да. Боты хакеров сканируют интернет 24/7 автоматически. Если у вас слабый пароль на почте (через которую привязан ФНС или Госуслуги), вы в зоне риска. Цель не вы, а ваши данные, которые можно продать.',
  },
  {
    q: 'Можно ли подключиться к общественному Wi-Fi в кафе?',
    a: 'Можно, но с осторожностью. Не входите в банки, почту и CRM через открытые сети. Злоумышленник в том же кафе может перехватить ваш трафик. Используйте VPN на рабочем устройстве.',
  },
  {
    q: 'Могут ли украсть данные с флешки, которую я просто вставил на 2 секунды?',
    a: 'Да. Существуют вирусы типа BadUSB или «шорткаты», которые запускаются автоматически. Настройте автозапуск на компьютере в режим «отключено».',
  },
]

const auditServices = [
  { icon: 'Crosshair', title: 'Тест на проникновение (Pentest)', text: 'Этичные хакеры попробуют вас взломать и дадут отчёт.' },
  { icon: 'FishOff', title: 'Анализ фишинговой устойчивости', text: 'Отправим фейковое письмо сотрудникам и посмотрим, кто повёлся.' },
  { icon: 'ClipboardCheck', title: 'Проверка соответствия 152-ФЗ и требованиям ФСТЭК', text: 'Убедимся, что ваш бизнес работает по закону.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Course() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <span className="text-xs text-[#00FF88] border border-[#00FF88]/30 rounded-full px-3 py-0.5">
            Бесплатный курс
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">

        {/* Hero */}
        <motion.section initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Информационная безопасность — это не про шпионов,{' '}
            <span className="text-[#00FF88]">а про ваши деньги и репутацию</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            В современном мире данные стали новой нефтью. Утечка пароля, фишинговое письмо или взлом рабочей переписки могут привести к краже средств, остановке бизнеса и многомиллионным штрафам. Мы собрали базовые принципы, которые помогут вам защитить главные активы.
          </p>
        </motion.section>

        {/* 3 страха */}
        <section>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold mb-2">
            3 главных страха информационной безопасности
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="text-gray-400 mb-10">
            Чтобы строить защиту, нужно понимать, от чего мы защищаемся. Вот тройка самых распространённых угроз для бизнеса и частных лиц:
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {fears.map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-4">
                  <Icon name={f.icon} size={20} className="text-[#00FF88]" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5 правил */}
        <section>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold mb-2">
            5 золотых правил для сотрудника компании
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="text-gray-400 mb-10">
            Запомните эту памятку. Соблюдение этих пунктов закрывает 90% дыр в безопасности.
          </motion.p>
          <div className="space-y-4">
            {rules.map((r, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/30 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center">
                  <Icon name={r.icon} size={20} className="text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Инструкция по тревоге */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
            <Icon name="AlertTriangle" size={14} className="text-red-400" />
            <span className="text-red-400 text-sm font-medium">Инструкция по тревоге</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="text-2xl md:text-3xl font-bold mb-2">
            Что делать, если вы поняли, что взломаны?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="text-gray-400 mb-10">
            Время реакции — решающий фактор. Действуйте по алгоритму:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {alarmSteps.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/20 transition-colors">
                <span className="text-4xl font-bold text-red-500/20 block mb-3">{s.num}</span>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Техминимум */}
        <section>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold mb-10">
            Технический минимум для малого бизнеса
          </motion.h2>
          <div className="space-y-4">
            {techMin.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex gap-3 items-start">
                <Icon name="CheckCircle" size={20} className="text-[#00FF88] mt-0.5 shrink-0" />
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Штрафы */}
        <section>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold mb-2">
            Ответственность и штрафы <span className="text-gray-500">(РФ, 2025)</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="text-gray-400 mb-10">
            Для информирования руководства: утечка персональных данных теперь карается сурово.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {fines.map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-gray-500 text-sm mb-3">{f.label}</p>
                <p className="text-white font-semibold leading-snug">{f.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold mb-10">
            FAQ
          </motion.h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="border-b border-white/10 pb-6">
                <p className="font-semibold mb-2 flex gap-2 items-start">
                  <span className="text-[#00FF88] shrink-0">В:</span>
                  {item.q}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed flex gap-2 items-start">
                  <span className="text-white shrink-0">О:</span>
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Аудит */}
        <section className="bg-white/5 border border-[#00FF88]/20 rounded-3xl p-8 md:p-12">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold mb-2">
            Заказать аудит информационной безопасности
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="text-gray-400 mb-10">
            Проверьте, не оставили ли вы случайно дверь в свою сеть открытой. Мы проведём:
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {auditServices.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white/5 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-3">
                  <Icon name={s.icon} size={18} className="text-[#00FF88]" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            <Button size="lg" className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 font-semibold">
              Связаться с нами
            </Button>
          </motion.div>
        </section>

      </main>
    </div>
  )
}