import { DirectiveBinding } from "vue";

type Element = (HTMLInputElement | HTMLTextAreaElement) & {
  clickOutsideEvent: any;
};

const handleOutsideClick = {
  beforeMount: (el: Element, binding: DirectiveBinding) => {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el == event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el: Element) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

export default handleOutsideClick;
