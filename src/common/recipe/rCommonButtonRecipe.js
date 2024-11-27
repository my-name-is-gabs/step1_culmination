const TODO_BUTTONS = [
  {
    component: 'CommonButton',
    directives: {
      type: 'button',
      size: 'sm',
      variant: 'warning',
    },
    events: {
      actionName: 'edit',
    },
    display: {
      label: 'Edit',
    },
  },
  {
    component: 'CommonButton',
    directives: {
      type: 'button',
      size: 'sm',
      variant: 'danger',
    },
    events: {
      actionName: 'delete',
    },
    display: {
      label: 'Delete',
    },
  },
]

const SLAMBOO_BUTTONS = [
  {
    component: 'CommonButton',
    directives: {
      type: 'submit',
      size: 'sm',
      variant: 'success',
    },
    display: {
      label: 'Add',
    },
    events: {
      actionName: 'addFriend',
    },
  },
  {
    component: 'CommonButton',
    directives: {
      type: 'reset',
      size: 'sm',
      variant: 'warning',
    },
    display: {
      label: 'Clear',
    },
    events: {
      actionName: 'clear',
    },
  },
]

export { TODO_BUTTONS, SLAMBOO_BUTTONS }
