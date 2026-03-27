<template>
  <div
    class="text-[#484848 ] relative size-full overflow-x-clip overscroll-contain bg-[#fffcfa] font-sans antialiased selection:bg-[#ffc9c9]"
  >
    <header class="sticky top-0 z-10 border-b border-[#eaeaea] bg-[#fffcfa] p-5">
      <div class="mx-auto flex max-w-7xl items-center gap-2">
        <img src="/logo.png" alt="Logo" class="h-11 max-md:h-10" />
        <div
          class="flex grow place-center gap-6.25 text-[15px] font-medium whitespace-nowrap text-[#262626] max-md:hidden"
        >
          <a
            href="#services"
            class="transition-colors duration-300 hover:text-primary hover:underline"
            >Services</a
          >
          <a
            href="#approach"
            class="transition-colors duration-300 hover:text-primary hover:underline"
            >Approach</a
          >
          <a
            href="#brand-strategy"
            class="transition-colors duration-300 hover:text-primary hover:underline"
            >Brand Strategy</a
          >
          <a
            href="#experience"
            class="transition-colors duration-300 hover:text-primary hover:underline"
            >Experience</a
          >

          <a href="#about" class="transition-colors duration-300 hover:text-primary hover:underline"
            >About</a
          >
          <a
            href="#contact"
            class="transition-colors duration-300 hover:text-primary hover:underline"
            >Contact</a
          >
        </div>
        <div class="hidden grow max-md:block" />
        <a
          href="#contact"
          class="group flex h-10 place-center rounded-xl bg-[#ebe5df] px-4 py-3 text-sm font-semibold text-[#262626] transition-colors duration-300 hover:bg-[#DED3C7]"
        >
          <span class="max-md:hidden">Schedule a conversation</span>
          <span class="hidden max-md:block">Contact Us</span>
          <Icon
            name="solar:alt-arrow-right-bold"
            class="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
        <button class="hidden size-10 place-center max-md:flex" @click="isMenuOpen = !isMenuOpen">
          <Icon name="solar:hamburger-menu-linear" class="size-6" />
        </button>
      </div>
    </header>

    <div
      v-if="isMenuOpen"
      class="fixed top-0 left-0 z-50 hidden h-full w-full flex-col bg-white p-5 max-md:flex"
    >
      <div class="flex items-center justify-between pb-5">
        <img src="/logo.png" alt="Logo" class="h-10" />
        <button class="flex size-10 place-center" @click="isMenuOpen = !isMenuOpen">
          <Icon name="solar:close-circle-linear" class="size-6 text-[#484848]" />
        </button>
      </div>
      <a href="#services" class="flex items-center justify-between border-b border-[#eaeaea] p-3">
        Services
        <Icon name="solar:arrow-right-linear" class="size-4" />
      </a>
      <a href="#approach" class="flex items-center justify-between border-b border-[#eaeaea] p-3">
        Approach
        <Icon name="solar:arrow-right-linear" class="size-4" />
      </a>
    </div>

    <!-- Hero -->
    <section
      class="mx-auto grid max-w-7xl grid-cols-2 items-center gap-12 px-5 pt-20 pb-16 max-md:grid-cols-1 max-md:pt-12"
    >
      <div>
        <div class="flex items-center gap-2">
          <img class="size-7" src="/logo-bullet.png" />
          <p class="rounded-lg bg-[#f2ebe7] px-2 text-sm leading-7 font-medium capitalize">
            Hospital planning
          </p>
        </div>
        <h1 class="mt-3 font-garnett text-5xl leading-tight text-balance max-md:text-4xl">
          Better strategy for hospital growth.
        </h1>
        <p class="mt-6 text-base leading-relaxed text-balance">
          3rd Curve Healthcare helps hospitals and health systems make clearer growth decisions in
          service line strategy, business development, and market positioning.
        </p>
        <div class="mt-8 flex items-center gap-2 text-sm font-semibold">
          <a
            href="#services"
            class="rounded-xl border border-[#eaeaea] bg-white px-6 py-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-gray-50"
          >
            View Services
          </a>
          <a
            href="#contact"
            class="rounded-xl bg-primary px-6 py-3 text-white transition-colors duration-300 hover:bg-primary-dark"
          >
            <span class="max-md:hidden">Schedule a conversation</span>
            <span class="hidden max-md:block">Contact Us</span>
          </a>
        </div>
      </div>
      <img class="block size-full object-contain" src="/hero.png" />
    </section>

    <!-- Growth decisions -->
    <div
      class="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-12 max-md:flex-col max-md:items-start max-md:gap-6"
    >
      <p class="text-sm leading-relaxed font-medium text-balance max-md:text-center">
        An ally to hospital and health system planning and marketing teams
      </p>
      <div
        class="flex items-start gap-2 whitespace-nowrap max-md:flex-wrap max-md:justify-center max-md:text-sm"
      >
        <div
          class="flex place-center gap-1.5 rounded-full border border-[#ebe6dc] bg-white py-2.5 pr-5 pl-4 shadow-pill max-md:pr-4 max-md:pl-3"
        >
          <Icon name="solar:chart-2-bold" class="size-5 text-[#484848] max-md:size-4" />
          <p>Market positioning</p>
        </div>
        <div
          class="flex place-center gap-1.5 rounded-full border border-[#ebe6dc] bg-white py-2.5 pr-5 pl-4 shadow-pill max-md:pr-4 max-md:pl-3"
        >
          <Icon name="solar:buildings-bold" class="size-5 text-[#484848] max-md:size-4" />
          <p>Hospital planning</p>
        </div>
        <div
          class="flex place-center gap-1.5 rounded-full border border-[#ebe6dc] bg-white py-2.5 pr-5 pl-4 shadow-pill max-md:pr-4 max-md:pl-3"
        >
          <Icon name="solar:pulse-bold" class="size-5 text-[#484848] max-md:size-4" />
          <p>Business development</p>
        </div>
        <div
          class="flex place-center gap-1.5 rounded-full border border-[#ebe6dc] bg-white py-2.5 pr-5 pl-4 shadow-pill max-md:pr-4 max-md:pl-3"
        >
          <Icon name="solar:hand-stars-bold" class="size-5 text-[#484848] max-md:size-4" />
          <p>Service line growth</p>
        </div>
      </div>
    </div>
    <!-- Line separator -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1286 6"
      class="mx-auto w-full max-w-7xl px-5"
    >
      <path
        fill="#e3e3e3"
        d="M1282.67 0a2.66 2.66 0 1 1-2.62 3.17H5.29a2.67 2.67 0 1 1 0-1h1274.76a2.7 2.7 0 0 1 2.62-2.17"
      />
    </svg>

    <!-- Services we offer -->
    <section id="services" class="mx-auto max-w-7xl px-5 py-32 max-md:py-16">
      <div class="flex items-center gap-2">
        <img class="size-7" src="/logo-bullet.png" />
        <p class="rounded-lg bg-[#f2ebe7] px-2 text-sm leading-7 font-medium capitalize">
          Services we offer
        </p>
      </div>
      <h2
        class="mt-3 max-w-2xl font-garnett text-4xl leading-tight font-semibold tracking-[-0.42px] text-balance max-md:text-3xl"
      >
        Strategy that connects planning, growth, and market execution
      </h2>
      <div
        class="mt-12 grid grid-cols-[1fr_1.5fr] items-center gap-20 max-md:grid-cols-1 max-md:gap-10"
      >
        <img alt="" class="size-full max-w-none rounded-[16px] object-cover" src="/img-1.png" />
        <div>
          <p class="text-[17px] leading-7 text-balance">
            We help hospitals and health systems bring structure to complex growth decisions by
            assessing opportunity, defining the right strategic priorities, and supporting plans for
            business development, service line growth, and market positioning.
          </p>
          <div class="mt-8 grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-5">
            <div>
              <Icon name="solar:buildings-bold" class="text-3xl text-primary" />
              <h3 class="relative mt-4 text-[18px] font-semibold text-black">
                Service Line Strategy
              </h3>
              <p class="mt-1 leading-6.5">
                Design and strengthen high-value service lines around real market need, integrated
                care delivery, and practical implementation.
              </p>
            </div>
            <div>
              <Icon name="solar:pallete-2-bold" class="text-3xl text-primary" />
              <h3 class="relative mt-4 text-[18px] font-semibold text-black">
                Brand Strategy Support
              </h3>
              <p class="mt-1 leading-6.5">
                Bring healthcare-specific strategic messaging and design support to strengthen your
                planning and marketing efforts without replacing your agency or internal team.
              </p>
            </div>
            <div>
              <Icon name="solar:hand-stars-bold" class="text-3xl text-primary" />
              <h3 class="relative mt-4 text-[18px] font-semibold text-black">
                Business Development
              </h3>
              <p class="mt-1 leading-6.5">
                Identify where to grow, how to differentiate, and what capabilities are needed to
                support sustainable expansion.
              </p>
            </div>
            <div>
              <Icon name="solar:medal-star-square-bold" class="text-3xl text-primary" />
              <h3 class="relative mt-4 text-[18px] font-semibold text-black">Market Positioning</h3>
              <p class="mt-1 leading-6.5">
                Strengthen how hospitals and health systems position growth initiatives, service
                lines, and strategic priorities in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why us -->
    <section id="approach" class="mx-auto max-w-7xl scroll-mt-32 px-5">
      <div
        class="relative mx-auto flex flex-col items-center overflow-clip rounded-[20px] bg-[#f2ebe7] p-20 text-center max-md:rounded-3xl max-md:p-10"
      >
        <img
          aria-hidden="true"
          draggable="false"
          class="pointer-events-none absolute -top-[15%] -right-[10%] h-5/6 w-auto opacity-50 select-none max-md:-top-[5%] max-md:h-auto max-md:w-full"
          src="/bg-white-icon.png"
        />
        <div class="relative flex items-center gap-2">
          <img class="size-7" src="/logo-bullet.png" />
          <p class="rounded-lg bg-white px-2 text-sm leading-7 font-medium capitalize">Why us</p>
        </div>

        <h2
          class="relative mt-5 max-w-2xl font-garnett text-4xl leading-tight font-semibold tracking-[-0.42px] text-balance max-md:text-3xl"
        >
          Growth decisions in healthcare are rarely simple
        </h2>
        <p class="relative mt-3 max-w-2xl text-balance">
          Hospital growth decisions require alignment across planning, operations, clinical
          leadership, and marketing. We help leaders reduce uncertainty, sharpen priorities, and
          move toward action with greater confidence.
        </p>

        <div
          class="relative mt-24 flex w-full items-center justify-between max-md:mt-8 max-md:flex-col max-md:gap-6"
        >
          <div class="flex flex-1 flex-col items-center gap-3">
            <Icon name="solar:check-circle-bold" class="size-8 text-primary" />
            <p class="text-center text-balance max-md:text-pretty">
              Built around hospital and health system growth priorities
            </p>
          </div>
          <div class="flex flex-1 flex-col items-center gap-3">
            <Icon name="solar:check-circle-bold" class="size-8 text-primary" />
            <p class="text-center text-balance max-md:text-pretty">
              Grounded in market need and operational feasibility
            </p>
          </div>
          <div class="flex flex-1 flex-col items-center gap-3">
            <Icon name="solar:check-circle-bold" class="size-8 text-primary" />
            <p class="text-center text-balance max-md:text-pretty">
              Aligned with planning, business development, and market positioning
            </p>
          </div>
          <div class="flex flex-1 flex-col items-center gap-3">
            <Icon name="solar:check-circle-bold" class="size-8 text-primary" />
            <p class="text-center text-balance max-md:text-pretty">
              Practical enough to support implementation
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto mt-12 max-w-7xl scroll-mt-20 px-5 max-md:mt-6">
      <div
        class="relative flex min-h-60 items-center justify-between overflow-clip rounded-4xl bg-linear-to-r from-[#470e16] to-primary-dark p-18 max-md:flex-col max-md:items-start max-md:gap-6 max-md:rounded-3xl max-md:p-8"
      >
        <img
          aria-hidden="true"
          draggable="false"
          class="pointer-events-none absolute -top-[30%] -right-[20%] h-auto w-2/3 rotate-25 opacity-3 select-none"
          src="/bg-white-icon.png"
        />
        <div class="relative">
          <p class="text-lg font-medium text-[#ed6e3b]">Let’s talk</p>
          <h4
            class="mt-2 font-garnett text-3xl font-semibold text-white selection:text-black max-md:text-2xl"
          >
            Want to evaluating a strategic opportunity?
          </h4>
        </div>
        <a
          href="#contact"
          class="group relative flex place-center gap-1.5 rounded-xl bg-primary px-6 py-3 text-white select-none max-md:w-full max-md:py-2.5"
        >
          Schedule a conversation
          <Icon
            name="solar:alt-arrow-right-bold"
            class="size-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>

    <section id="brand-strategy" class="overflow-clip pt-44 text-center max-md:pt-20">
      <h2 class="font-garnett text-4xl leading-tight text-balance text-black max-md:text-3xl">
        A practical approach to strategic growth.
      </h2>
      <div
        class="mx-auto mt-10 grid w-full max-w-6xl grid-cols-3 items-start gap-8 px-20 py-12 max-md:grid-cols-1 max-md:gap-4 max-md:px-5 max-md:py-6"
      >
        <div class="flex flex-col items-center rounded-lg">
          <p class="font-garnett text-4xl text-primary">01</p>
          <h3 class="mt-5 text-[20px] font-semibold text-black">Assess the opportunity</h3>
          <p class="mt-2 text-balance">
            Evaluate market conditions, organizational capabilities, and the strategic rationale for
            growth.
          </p>
        </div>
        <div class="flex flex-col items-center rounded-lg">
          <p class="font-garnett text-4xl text-primary">02</p>
          <h3 class="mt-5 text-[20px] font-semibold text-black">Design the strategy</h3>
          <p class="mt-2 text-balance">
            Set service priorities, differentiation, and growth strategies aligned with
            organizational goals.
          </p>
        </div>
        <div class="flex flex-col items-center rounded-lg">
          <p class="font-garnett text-4xl text-primary">03</p>
          <h3 class="mt-5 text-[20px] font-semibold text-black">Support implementation</h3>
          <p class="mt-2 text-balance">
            Clarify priorities, feasibility, and the structure to execute strategy.
          </p>
        </div>
      </div>
      <a
        href="#contact"
        class="group mx-auto mt-20 flex w-fit place-center gap-1.5 rounded-xl bg-primary px-6 py-3 text-white select-none max-md:mt-8"
      >
        Schedule a conversation
        <Icon
          name="solar:alt-arrow-right-bold"
          class="size-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </section>

    <svg
      class="pointer-events-none mt-20 -mb-px w-full text-primary-dark select-none max-md:mt-16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1920 20"
    >
      <path
        fill="currentColor"
        d="M437.98 0 0 10.5V20h1920v-9.5l-79.77-2.8-143.99 2.8L1421.81 0l-96.32 10.5L1161.93 0 669.27 10.5z"
      />
    </svg>
    <section id="experience" class="scroll-mt-20 bg-primary-dark px-5 py-32 max-md:py-16">
      <div
        class="mx-auto grid max-w-6xl grid-cols-[1fr_1.15fr] gap-16 text-white selection:text-black max-md:grid-cols-1 max-md:gap-6"
      >
        <img class="size-full rounded-3xl object-cover" src="/img-4.png" />
        <div>
          <h2 class="font-garnett text-4xl leading-tight max-md:text-3xl">
            Representative work and strategic focus
          </h2>
          <div class="mt-6 flex items-start gap-5 rounded-[20px] bg-[#540f16] p-6 max-md:flex-col">
            <Icon name="solar:buildings-bold" class="-mt-1 size-12 text-[#ED6E3B] max-md:size-8" />
            <div>
              <h3 class="text-lg font-semibold">Evaluating a specialty growth opportunity</h3>
              <p class="mt-1.5 leading-relaxed text-white/50">
                Supported leadership in assessing market potential, strategic fit, and
                implementation considerations for a priority service line.
              </p>
            </div>
          </div>
          <div class="mt-4 flex items-start gap-5 rounded-[20px] bg-[#540f16] p-6 max-md:flex-col">
            <Icon name="solar:buildings-bold" class="-mt-1 size-12 text-[#ED6E3B] max-md:size-8" />
            <div>
              <h3 class="text-lg font-semibold">Strengthening executive decision-making</h3>
              <p class="mt-1.5 leading-relaxed text-white/50">
                Provided structured analysis and practical recommendations to clarify priorities,
                assess capabilities, and support leadership decisions.
              </p>
            </div>
          </div>
          <div class="mt-4 flex items-start gap-5 rounded-[20px] bg-[#540f16] p-6 max-md:flex-col">
            <Icon name="solar:buildings-bold" class="-mt-1 size-12 text-[#ED6E3B] max-md:size-8" />
            <div>
              <h3 class="text-lg font-semibold">Clarifying market-facing strategy</h3>
              <p class="mt-1.5 leading-relaxed text-white/50">
                Helped shape messaging and positioning for strategic initiatives so planning,
                leadership, and marketing teams could move in alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <svg
      class="pointer-events-none -mt-px w-full text-primary-dark select-none"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1920 20"
    >
      <path
        fill="currentColor"
        d="M1482.02 20 1920 9.5V0H0v9.5l79.77 2.8 143.99-2.8L498.19 20 594.5 9.5 758.07 20l492.66-10.5z"
      />
    </svg>

    <section
      id="about"
      class="mx-auto grid max-w-7xl grid-cols-2 gap-16 overflow-hidden px-5 pt-52 pb-12 max-md:grid-cols-1 max-md:gap-6 max-md:pt-20"
    >
      <h2 class="font-garnett text-5xl leading-tight font-semibold text-black max-md:text-3xl">
        Healthcare strategists focused on growth and execution.
      </h2>
      <div class="space-y-4 text-lg leading-relaxed">
        <p>
          3rd Curve Healthcare helps hospitals and health systems make better strategic decisions by
          combining market perspective, service line insight, business development thinking, and
          market positioning support.
        </p>
        <p>
          Our work is built for leaders responsible for hospital planning, business development,
          service line growth, and market positioning.
        </p>
        <p>
          The result is a more disciplined path from strategic opportunity to operational action.
        </p>
      </div>
      <img
        alt=""
        class="row-span-3 mx-auto h-full max-h-160 w-full max-w-lg rounded-[16px] object-cover max-md:row-span-1"
        src="/img-3.png"
      />
      <img
        alt=""
        class="col-start-2 row-start-4 mx-auto h-full w-full max-w-lg rounded-2xl object-cover max-md:hidden"
        src="/img-2.png"
      />
    </section>

    <section
      id="contact"
      class="mx-auto grid max-w-7xl scroll-mt-20 grid-cols-[1fr_1.75fr] gap-6 px-5 py-20 max-md:grid-cols-1 max-md:gap-6 max-md:py-10"
    >
      <div class="rounded-4xl bg-primary-dark p-8 text-white max-md:rounded-3xl max-md:p-6">
        <h2 class="font-garnett text-3xl font-semibold text-balance">Let’s have a conversation</h2>
        <p class="mt-3 text-balance text-white/70">
          Whether you are evaluating a strategic opportunity, refining a service line growth plan,
          or strengthening market positioning, we would welcome the conversation.
        </p>
        <div class="grow" />
        <div class="mt-6 flex flex-wrap gap-2 text-[13px] whitespace-nowrap">
          <div
            class="flex place-center gap-2 rounded-full border border-white/10 bg-[#540f16] py-1.5 pr-4 pl-3"
          >
            <Icon name="solar:buildings-bold" class="size-4 text-[#ED6E3B]" />
            <p>Market positioning</p>
          </div>
          <div
            class="flex place-center gap-2 rounded-full border border-white/10 bg-[#540f16] py-1.5 pr-4 pl-3"
          >
            <Icon name="solar:buildings-bold" class="size-4 text-[#ED6E3B]" />
            <p>Hospital planning</p>
          </div>
          <div
            class="flex place-center gap-2 rounded-full border border-white/10 bg-[#540f16] py-1.5 pr-4 pl-3"
          >
            <Icon name="solar:pulse-bold" class="size-4 text-[#ED6E3B]" />
            <p>Business development</p>
          </div>
          <div
            class="flex place-center gap-2 rounded-full border border-white/10 bg-[#540f16] py-1.5 pr-4 pl-3"
          >
            <Icon name="solar:hand-stars-bold" class="size-4 text-[#ED6E3B]" />
            <p>Service line growth</p>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 content-center gap-5 rounded-4xl border border-[#d4d4d4]/50 bg-white p-8 max-md:grid-cols-1 max-md:gap-3 max-md:rounded-3xl max-md:p-6"
      >
        <p class="col-span-2 text-lg font-semibold max-md:col-span-1">We'd love to hear from you</p>
        <input
          class="h-12 rounded-xl border border-[#d4d4d4] px-4 py-3 outline-[#A41A1A]"
          name="fullName"
          placeholder="Name"
        />
        <input
          class="h-12 rounded-xl border border-[#d4d4d4] px-4 py-3 outline-[#A41A1A]"
          name="organization"
          placeholder="Organization"
        />
        <input
          class="h-12 rounded-xl border border-[#d4d4d4] px-4 py-3 outline-[#A41A1A]"
          name="title"
          placeholder="Title"
        />
        <input
          class="h-12 rounded-xl border border-[#d4d4d4] px-4 py-3 outline-[#A41A1A]"
          name="email"
          placeholder="Email"
        />
        <textarea
          class="col-span-2 w-full rounded-lg border border-[#d4d4d4] bg-white px-4 py-3 outline-[#A41A1A] max-md:col-span-1"
          placeholder="What strategic issue are you exploring?"
        ></textarea>
        <button
          class="group col-span-2 flex w-fit place-center gap-1.5 rounded-xl bg-primary py-2.5 pr-4 pl-6 text-center text-white select-none max-md:col-span-1"
        >
          Submit
          <Icon
            name="solar:alt-arrow-right-bold"
            class="size-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>

    <svg
      class="pointer-events-none -mb-px w-full text-[#1c1c1c] select-none"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1920 20"
    >
      <path
        fill="currentColor"
        d="M437.98 0 0 10.5V20h1920v-9.5l-79.77-2.8-143.99 2.8L1421.81 0l-96.32 10.5L1161.93 0 669.27 10.5z"
      />
    </svg>
    <footer class="bg-[#1c1c1c] px-20 pt-12 pb-5 max-md:px-5 max-md:pb-3">
      <div
        class="mx-auto grid max-w-7xl grid-cols-4 items-start justify-between gap-10 max-md:grid-cols-1 max-md:gap-6"
      >
        <div class="col-span-2">
          <img class="h-10 shrink-0" src="/logo-inverted-text.png" />
          <p
            class="relative mt-8 max-w-lg leading-[26px] tracking-[-0.16px] text-balance text-white"
          >
            3rd Curve Healthcare helps hospitals and health systems make better strategic decisions
            by combining market perspective, service line insight, business development thinking,
            and market positioning support.
          </p>
        </div>
        <div>
          <p class="relative text-[18px] font-semibold text-primary">Company</p>
          <div class="mt-3 grid gap-4 text-[15px] text-white/70">
            <a href="#services" class="hover:text-white">Services</a>
            <a href="#approach" class="hover:text-white">Approach</a>
            <a href="#brand-strategy" class="hover:text-white">Brand Strategy</a>
            <a href="#experience" class="hover:text-white">Experience</a>
            <a href="#about" class="hover:text-white">About</a>
            <a href="#contact" class="hover:text-white">Contact</a>
          </div>
        </div>
        <div class="relative flex flex-col content-stretch items-start justify-center gap-[25px]">
          <p class="relative text-[18px] font-semibold text-primary">Contact</p>
          <div class="grid gap-2 text-[15px] text-white/70">
            <a href="tel:5029944045" class="hover:text-white hover:underline">(502) 994-4045</a>
            <a href="mailto:info@3rdcurve.com" class="hover:text-white hover:underline"
              >info@3rdcurve.com</a
            >
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center gap-4 border-t border-white/5 pt-5">
        <p class="text-left text-sm whitespace-nowrap text-white/50">
          © {{ new Date().getFullYear() }} 3rd Curve Healthcare. All rights reserved.
        </p>
        <div class="grow" />
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>
