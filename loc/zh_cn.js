module.exports = {
  _: {
    storage_is_encrypted: '你的信息已经被加密， 请输入密码解密',
    enter_password: '输入密码',
    bad_password: '密码无效，请重试',
    never: '无',
    continue: '继续',
    ok: '好的',
    bad_network: "网络连接错误，请重试",
  },
  general: {
    cancel: '取消',
    delete: '删除',
    close: '关闭',
    reply: '回复',
    reply_sent: '回复已发送',
    share: '分享',
    share_sent: '共享成功',
    copiedToClipboard: '已复制到剪贴板',
    unconfirmed: '未确认',
    label_wallets: '钱包',
    label_data: '数据',
    label_settings: '设置',
    language_restart: '选择新语言后，需要重新启动应用程序才能使更改生效',
  },
  namespaces: {
    height: "区块",
    my_data: "我的数据",
    others: "其他",
    namespace_name: "命名空间名称",
    shortcode_id: "短码或交易Id",
    no_data: "无数据",
    click_add_btn: "输入名称，然后单击“添加”按钮以创建您的第一个名称空间",
    click_search_btn: "输入名称空间短代码（例如5577271），然后单击“搜索”按钮以查看其他名称空间",
    explain: "名称空间是一个数据容器，您可以在其中添加键值对",
    explain_tx: "您还可以输入与名称空间相关的任何事务ID. 使用'kevacoin-cli keva_filter'查找名称空间事务ID.",
    explain_ns: "移动应用程序不支持命名空间ID",
    namespace_creation_err: '无法创建名称空间. 请等待几分钟，直到您的最后一次更改在区块链中得到确认.',
    update_key_err: '无法更新或添加键值.请等待几分钟，直到您的最后一次更改在区块链中得到确认.',
    delete_key_err: '无法删除键值.请等待几分钟，直到您的最后一次更改在区块链中得到确认.',
    multiaddress_wallet: '仅支持多地址钱包.',
    creating_tx: '创建交易 ...',
    please_wait: '大约需要10秒钟, 请稍候',
    scanning_block: '下载交易:',
    refreshing: '刷新数据...',
    default_share: '分享帖子',
  },
  wallets: {
    select_wallet: '选择钱包',
    options: '选项',
    createBitcoinWallet: '您当前没有kevacoin钱包. 为了支持闪电钱包, 我们需要创建或者导入一个Kevacoin钱包. 是否需要继续?',
    list: {
      general: '常规',
      app_name: 'KevaWallet',
      title: '钱包',
      header: '一个钱包代表一对的私钥和地址' + '你可以通过分享收款.',
      add: '添加钱包',
      create_a_wallet: '添加钱包',
      create_a_wallet1: '创建钱包是免费的，你可以',
      create_a_wallet2: '想创建多少就创建多少个',
      create_a_button: '现在添加',
      latest_transaction: '最近的转账',
      empty_txs1: '你的转账信息将展示在这里',
      empty_txs2: '当前无信息',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: '点击购买Kevacoin',
      single_address: '单地址',
      hd_multi_address: 'HD 多地址',
    },
    reorder: {
      title: '重新排列钱包',
    },
    add: {
      title: '添加钱包',
      description: '你可以扫描你的纸质备份钱包 (WIF格式), 或者创建一个新钱包. 默认支持隔离见证钱包',
      scan: '扫描',
      create: '创建',
      label_new_segwit: '新隔离见证(Segwit)',
      label_new_lightning: '新闪电',
      wallet_name: '钱包名称',
      wallet_type: '类型',
      or: '或',
      import_wallet: '导入钱包',
      imported: '已经导入',
      coming_soon: '即将来临',
      lightning: '闪电',
      bitcoin: 'Kevacoin',
      multi_address: '多地址',
      single_address: '单地址',
    },
    details: {
      title: '钱包',
      address: '地址',
      master_fingerprint: 'Master fingerprint',
      type: '类型',
      label: '标签',
      destination: '目的',
      description: '描述',
      are_you_sure: '你确认么?',
      yes_delete: '是的，删除',
      no_cancel: '不，取消',
      delete: '删除',
      save: '保存',
      delete_this_wallet: '删除这个钱包',
      export_backup: '导出备份',
      buy_bitcoin: '购买Kevacoin',
      show_xpub: '展示钱包 XPUB',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: '钱包导出',
    },
    xpub: {
      title: '钱包 XPUB',
      copiedToClipboard: '复制到粘贴板.',
    },
    import: {
      title: '导入',
      explanation: '输入你的助记词，私钥或者WIF, 或者其他格式的数据. KevaWallet将尽可能的自动识别数据格式并导入钱包',
      imported: '已经导入',
      error: '导入失败，请确认你提供的信息是有效的',
      success: '成功',
      do_import: '导入',
      scan_qr: '或扫面二维码',
    },
    scanQrWif: {
      go_back: '回退',
      cancel: '取消',
      decoding: '解码中',
      input_password: '输入密码',
      password_explain: '这是一个BIP38加密的私钥',
      bad_password: '密码错误',
      wallet_already_exists: '当前钱包已经存在',
      bad_wif: 'WIF格式无效',
      imported_wif: 'WIF已经导入',
      with_address: ' 地址为',
      imported_segwit: 'SegWit已经导入',
      imported_legacy: 'Legacy已经导入',
      imported_watchonly: '导入只读',
    },
  },
  transactions: {
    list: {
      tabBarLabel: '转账',
      title: '转账',
      description: '当前所有钱包的转入和转出记录',
      conf: '确认',
    },
    details: {
      title: '转账',
      from: '输入',
      to: '输出',
      copy: '复制',
      transaction_details: '转账详情',
      show_in_block_explorer: '区块浏览器展示',
    },
  },
  send: {
    header: '发送',
    details: {
      title: '创建交易',
      amount_field_is_not_valid: '金额格式无效',
      fee_field_is_not_valid: '费用格式无效',
      address_field_is_not_valid: '地址内容无效',
      total_exceeds_balance: '余额不足',
      create_tx_error: '创建交易失败. 请确认地址格式正确.',
      address: '地址',
      amount_placeholder: '发送金额(in KVA)',
      fee_placeholder: '手续费用 (in KVA)',
      note_placeholder: '消息',
      cancel: '取消',
      scan: '扫描',
      send: '发送',
      create: '创建',
      remaining_balance: '剩余金额',
    },
    confirm: {
      header: '确认',
      sendNow: '现在发送',
    },
    success: {
      done: '完成',
    },
    create: {
      details: '详情',
      title: '创建详情',
      error: '创建交易失败. 无效地址或金额?',
      go_back: '回退',
      this_is_hex: '这个是交易的十六进制数据, 签名并广播到全网络.',
      to: '到',
      amount: '金额',
      fee: '手续费',
      tx_size: '交易大小',
      satoshi_per_byte: '葱每byte',
      memo: '消息',
      broadcast: '广播',
      not_enough_fee: '手续费不够，请增加手续费',
    },
  },
  receive: {
    header: '收款',
    details: {
      title: '分享这个地址给付款人',
      share: '分享',
      copiedToClipboard: '复制到粘贴板.',
      label: '描述',
      create: '创建',
      setAmount: '收款金额',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: '购买Kevacoin',
    tap_your_address: '点击地址复制到粘贴板:',
    copied: '复制到粘贴板!',
  },
  settings: {
    general: '常规',
    security: '安全',
    header: '设置',
    plausible_deniability: '可否认性...',
    storage_not_encrypted: '存储:未加密',
    storage_encrypted: '存储:加密中',
    password: '密码',
    password_explain: '创建你的加密密码',
    retype_password: '再次输入密码',
    passwords_do_not_match: '两次输入密码不同',
    encrypt_storage: '加密存储',
    lightning_settings: '闪电网络设置',
    lightning_settings_explain: '如要要连接你自己的闪电节点请安装LndHub' + ' 并把url地址输入到下面. 空白将使用默认的LndHub (lndhub.io)',
    network: '网络',
    electrum_settings: 'Electrum 服务器设定',
    electrum_settings_explain: '空白为默认值',
    electrum_restart: '您的更改已成功保存。要使更改生效，需要重新启动应用程序',
    save: '保存',
    about: '关于',
    language: '语言',
    currency: '货币',
    advanced_options: '高级选项',
    enable_advanced_mode: '启用高级模式',
    advanced_mode_note: '启用后，您将看到高级选项，例如不同的钱包类型。',
  },
  plausibledeniability: {
    title: '可否认性',
    help:
      '在某些情况下, 你不得不暴露 ' +
      '密码. 为了让你的Kevacoin更加安全, KevaWallet可以创建一些 ' +
      '加密空间, 用不同的密码. 在压力之下, ' +
      '你可以暴露这个钱包密码. 再次进入 ' +
      'KevaWallet, 我们会解锁一些虚拟空间. 对第三方来说看上去' +
      '是合理的, 但会偷偷的帮你保证主钱包的安全 ' +
      '币也就安全了.',
    help2: '新的空间具备完整的功能，你可以存在 ' + '少量的金额在里面.',
    create_fake_storage: '创建虚拟加密存储',
    go_back: '回退',
    create_password: '创建密码',
    create_password_explanation: '虚拟存储空间密码不能和主存储空间密码相同',
    password_should_not_match: '虚拟存储空间密码不能和主存储空间密码相同',
    retype_password: '重输密码',
    passwords_do_not_match: '两次输入密码不同，请重新输入',
    success: '成功',
  },
  lnd: {
    title: '配置资金支持',
    choose_source_wallet: '选择一个资金源钱包',
    refill_lnd_balance: '给闪电钱包充值',
    refill: '充值',
    withdraw: '提取',
    expired: '超时',
    sameWalletAsInvoiceError: '你不能用创建账单的钱包去支付该账单',
    placeholder: 'Invoice',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
