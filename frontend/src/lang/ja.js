export default {
  sidebar: {
    home: 'トップページ',
    stylegen: 'スタイルジェネレータ',
    help: '使用教程（ヘルプ）',
    projectAddress: 'プロジェクトアドレス',
    giftRecordOfficial: '公式スーパーチャット記録',
  },
  home: {
    roomIdEmpty: 'ルームのIDを空白にすることはできません',
    roomIdInteger: 'ルームは正の整数でなければなりません',

    general: '常規',
    roomId: 'ルームID',
    showDanmaku: 'コメントを表示する',
    showSuperchat: 'スーパーチャットを表示する',
    showNewMember: '新メンバーを表示する',
    showGift: 'ギフトを表示する',
    showGiftInfo: 'ギフト内容を表示する',
    mergeSameUserDanmaku: '同じリスナーのコメントを合併する',
    mergeSameUserDanmakuInterval: '同じリスナーのコメントを合併するタイム間隔（秒）',
    mergeSimilarDanmaku: '同じコメントを合併する',
    mergeGift: 'ギフトを合併する',
    
    minGiftPrice: '最低表示スーパーチャット価格',
    minTickerPrice: '最低表示常駐Topスーパーチャット価格',
    minGiftPricePlaceholder: '(CNY)',
    maxNumber: '最大コメント数',
    fadeOutNum: '消えるコメント数',
    pinTime: 'コメントの存在時間(秒)',
    pinTimePlaceholder: '0 は消しない',

    special: '特殊機能',
    danmakuAtBottom: 'コメントを下揃え',
    tickerAtButtom: '最低表示常駐Topスーパーチャットを下から現れる',
    randomXOffset: 'ランダムコメントX位置',
    randomXRangeMin: 'Xの最小値',
    randomXRangeMax: 'Xの最大値',
    randomYOffset: 'ランダムコメントY位置',
    randomYRangeMin: 'Yの最小値',
    randomYRangeMax: 'Yの最大値',
    randomXInitialOffset: '初期Xの偏移',
    randomYInitialOffset: '初期Yの偏移',
    floatDistanceXMin: '最小X移動距離',
    floatDistanceXMax: '最大X移動距離',
    floatDistanceYMin: '最小Y移動距離',
    floatDistanceYMax: '最大Y移動距離',
    floatDistanceThreshold: '移動距離スレッショルド',
    pixelPlaceholder: '(px)',
    floatTime: '移動時間',
    timePlaceholder: '(秒)',
    allowTextColorSetting: '文字の色を変更（Hex）',
    
    showTranslateDanmakuOnly: '翻訳コメントだけを表示する',
    blockTranslateDanmaku: '翻訳コメントをブロック',
    translationSign: '翻訳コメントの合図キャラクタ',
    onlyOneCharacter: '一個キャラクタだけ、例：【',

    autoRenderOfficialEmoji: '自動表示公式スタンプ',
    isGreedyMatch: '貪欲(Greedy)マッチ',
    isSkipSameImage: '相同画像を表示しない',
    imageShowType: 'スタンプの表現方',
    imageShowTypes: [
      {
        id: '0',
        name: '文字を替わる(合図キャラクタ必要ない)'
      },
      {
          id: '1',
          name: 'コメントの後で付ける'
      }
    ],
   
    maxImage: '最大画像数',
    maxEmoji: '最大絵文字数',
    imageAlignType: 'スタンプの揃え',
    imageAlignTypes: [
      {
        id: 'inline',
        name: '後で付け(絵文字)'
      },
      {
        id: 'block',
        name: '新たな行(画像)'
      }
    ],
    imageLevel: '画像発送権限',
    imageLevels: [
      {
        id: 0,
        name: '全て'
      },
      {
        id: 3,
        name: '艦長'
      },
      {
        id: 2,
        name: '提督'
      },
      {
        id: 1,
        name: '総督'
      }
    ],

    block: 'ブロック',
    giftDanmaku: 'ブロックシステムコメント（プレゼント効果）',
    blockLevel: 'ブロックユーザーレベルがx未満',
    informalUser: 'ブロック非公式ユーザー',
    unverifiedUser: 'ブロック認証されていないユーザー',
    blockKeywords: 'ブロックキーワード',
    onePerLine: '1行に1つずつ',
    blockUsers: 'ブロックユーザー',
    blockMedalLevel: 'ブロック勲章等級がx未満',

    advanced: 'アドバンスド',
    relayMessagesByServer: 'サーバを介してメッセージを転送する',
    autoTranslate: 'コメントを日本語に翻訳する（サーバを介してメッセージを転送する必要）',
    giftUsernamePronunciation: 'スーパーチャットのユーザー名の発音',
    dontShow: '非表示',
    pinyin: 'ピンイン',
    kana: '仮名',

    testing: 'コメントテスト',
    minDanmakuInterval: '最小コメント間隔',
    maxDanmakuInterval: '最大コメント間隔',

    emoticon: 'カスタムスタンプ',
    emoticonKeyword: '置き換えるキーワード',
    emoticonAlign: '画像揃え',
    emoticonLevel: '图片发送权限',
    emoticonHeight: '画像高度',
    emoticonUrl: 'URL',
    operation: '操作',
    addEmoticon: 'スタンプ追加（後で付け）',
    addPicture: '画像追加（新たな行）',

    roomUrl: 'ルームのURL',
    copy: 'コピー',
    enterBilibili: 'Bilibiliルームに入る',
    openTutorial: '使用教程',

    enterRoom: 'ルームに入る',
    enterTestRoom: 'テストルームに入る',
    exportConfig: 'コンフィグの導出',
    importConfig: 'コンフィグの導入',

    failedToParseConfig: 'コンフィグ解析に失敗しました'
  },
  stylegen: {
    legacy: '古典',
    lineLike: 'Line風',

    light: '明るい',
    dark: '暗い',

    global: '全局設定',
    danmakuAtBottom: 'コメントを下から現れる',
    tickerAtButtom: '最低表示常駐Topスーパーチャットを下から現れる',

    outlines: 'アウトライン',
    showOutlines: 'アウトラインを表示する',
    outlineSize: 'アウトラインのサイズ',
    outlineColor: 'アウトラインの色',

    avatars: 'アイコン',
    showAvatars: 'アイコンを表示する',
    avatarSize: 'アイコンのサイズ',

    userNames: 'ユーザー名',
    showUserNames: 'ユーザー名を表示する',
    font: 'フォント',
    fontSize: 'フォントサイズ',
    lineHeight: '行の高さ（0はデフォルト）',
    randomUserNamesColor: 'ランドンユーザー名の色',
    normalColor: 'ノーマルの色',
    ownerColor: 'オーナーの色',
    moderatorColor: '管理者の色',
    memberColor: 'メンバーの色',
    showBadges: '勲章を見せる',
    showColon: 'ユーザー名の後にコロンが表示されます',
    badgesSize: '勲章サイズ',
    emoticonSize: 'スタンプサイズ',
    emoticonInlineBorderRadius: '後で付けスタンプ圆角',
    emoticonBlockBorderRadius: '新たな行スタンプ圆角',

    medal: 'ファン勲章',
    showMedal: 'ファン勲章を表示する',
    showOnlyOwnerMedal: 'オーナーのファン勲章だけを表示する',
    showMedalName: 'ファン勲章名を表示する',
    showMedalLevel: 'ファン勲章レベルを表示する',

    messages: 'コメント',
    color: '色',
    onNewLine: '新しい行に表示する',
    mergeSameUser: '同じリスナーのコメントを合併する',
    groupBlockPadding: 'コメントグループ内コメントの間隔距離',

    time: '時間',
    showTime: '時間を表示する',
    showTimeRight: '時間を右側で表示する',

    backgrounds: '背景',
    bgColor: '背景色',
    useBarsInsteadOfBg: '背景に代わります',
    messageBgColor: 'コメント背景色',
    ownerMessageBgColor: 'オーナーコメント背景色',
    moderatorMessageBgColor: '管理者コメント背景色',
    memberMessageBgColor: 'メンバーコメント背景色',

    scAndNewMember: 'スーパーチャット、新メンバー',
    firstLineFont: '1行目のフォント',
    firstLineFontSize: '1行目のフォントサイズ',
    firstLineLineHeight: '1行目の高さ（0はデフォルト）',
    firstLineColor: '1行目の色',
    secondLineFont: '2行目のフォント',
    secondLineFontSize: '2行目のフォントサイズ',
    secondLineLineHeight: '2行目の高さ（0はデフォルト）',
    secondLineColor: '2行目の色',
    scContentLineFont: 'スーパーチャットのコンテンツフォント',
    scContentLineFontSize: 'スーパーチャットコンテンツフォントサイズ',
    scContentLineLineHeight: 'スーパーチャットコンテンツライン高さ（0がデフォルト）',
    scContentLineColor: 'スーパーチャットコンテンツライン色',
    showNewMemberBg: '新メンバーの背景を表示する',
    showScTicker: 'スーパーチャットチカーの表示',
    showOtherThings: 'スーパーチャットチカー以外のコンテンツを表示します',

    animation: 'アニメーション',
    animateIn: '入場アニメーション',
    fadeInTime: 'フェードイン時間（ミリ秒）',
    animateOut: '古いコメントを除去する',
    animateOutWaitTime: '待ち時間（秒）',
    fadeOutTime: 'フェードアウト時間（ミリ秒）',
    slide: '滑る',
    reverseSlide: '逆の滑る',
    playAnimation: 'アニメーションを再生する',

    result: '結果',
    copy: 'コピー',
    resetConfig: 'デフォルトに戻す'
  },
  help: {
    help: 'ヘルプ',
    p1: '1. ビリビリの生放送ウェブから生放送ルームIDをこぴーする',
    p2: '2. ホームページでコピーしたIDを入力し、ルームのURLをこぴーする',
    p3: '3. スタイルジェネレータでお好みのコメント様子を選び、出力したCSSをコピーする',
    p4: '4. OBSでブラウザを新規作成する',
    p5: '5. プロパティでこぴーしたURLを入力し、カスタムCSSでスタイルジェネレータのCSSを入力する'
  },
  chat: {
    moderator: 'モデレーター',
    guardLevel1: '総督',
    guardLevel2: '提督',
    guardLevel3: '艦長',
    sendGift: '{giftName}x{num} を贈りました',
    membershipTitle: '新規メンバー',
    tickerMembership: 'メンバー'
  }
}
