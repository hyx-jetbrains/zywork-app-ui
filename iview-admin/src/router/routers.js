import Main from '@/components/main'
import parentView from '@/components/parent-view'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.devServer : config.baseUrl.proServer

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'zywok-app - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: 'UserInfo',
        name: 'user_info',
        meta: {
          title: '个人信息',
          icon: 'ios-contact',
          hideInMenu: true,
          notCache: true
        },
        component: () => import('@/view/user-info/UserInfo.vue')
      },
      {
        path: 'ActivitiTasks',
        name: 'activiti_tasks',
        meta: {
          title: '我的流程任务',
          icon: 'ios-contact',
          hideInMenu: true,
          notCache: true,
          notCache: true
        },
        component: () => import('@/view/activiti-tasks/ActivitiTasks.vue')
      },
    ]
  },
  // {
  //   path: '',
  //   name: 'doc',
  //   meta: {
  //     title: '文档',
  //     href: 'https://lison16.github.io/iview-admin-doc/#/',
  //     icon: 'ios-book'
  //   }
  // },
	{
	  path: '/admin',
	  name: 'organization_manage',
	  meta: {
	    icon: 'md-people',
	    title: '组织部门管理'
	  },
	  component: Main,
	  children: [
	    {
	      path: 'Organization',
	      name: 'organization',
	      meta: {
	        title: '组织部门管理',
	        icon: 'md-people'
	      },
	      component: () => import('@/view/organization/Organization.vue')
      },
			{
			  path: 'UserOrganization',
			  name: 'user_organization',
			  meta: {
			    title: '用户组织部门查询',
			    icon: 'ios-people'
			  },
			  component: () => import('@/view/user-organization/UserOrganizationMain.vue')
			}
	  ]
	},
  {
    path: '/admin',
    name: 'user_manage',
    meta: {
      icon: 'md-person',
      title: '用户管理'
    },
    component: Main,
    children: [
      {
        path: 'User',
        name: 'user_basic',
        meta: {
          title: '用户基础信息管理',
          icon: 'ios-person'
        },
        component: () => import('@/view/user/UserMain.vue')
      },
			{
			  path: 'UserDetail',
			  name: 'user_detail_query',
			  meta: {
			    title: '用户详情管理',
			    icon: 'md-information-circle'
			  },
			  component: () => import('@/view/user-userdetail/UserUserDetailMain.vue')
			},
			{
			  path: 'UserSocial',
			  name: 'user_social_query',
			  meta: {
			    title: '用户第三方登录管理',
			    icon: 'md-share'
			  },
			  component: () => import('@/view/user-usersocial/UserUserSocialMain.vue')
			},
			{
			  path: 'UserRole',
			  name: 'user_role_query',
			  meta: {
			    title: '用户角色查询',
			    icon: 'ios-lock'
			  },
			  component: () => import('@/view/user-role/UserRoleMain.vue')
			},
      {
        path: 'ShippingAddress',
        name: 'receiving_address_manage',
        meta: {
          title: '收货地址管理',
          icon: 'ios-home'
        },
        component: () => import('@/view/shipping-address/ShippingAddressMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'user_fund_manage',
    meta: {
      icon: 'logo-yen',
      title: '用户资金管理'
    },
    component: Main,
    children: [
      {
        path: 'UserWallet',
        name: 'wallet_manage',
        meta: {
          title: '钱包管理',
          icon: 'md-cash'
        },
        component: () => import('@/view/user-wallet/UserWalletMain.vue')
      },
      {
        path: 'UserBankcard',
        name: 'bank_card_manage',
        meta: {
          title: '银行卡管理',
          icon: 'ios-card'
        },
        component: () => import('@/view/user-bankcard/UserBankcardMain.vue')
      },
      {
        path: 'AccountDetail',
        name: 'user_account_manage',
        meta: {
          title: '账目详情管理',
          icon: 'md-list-box'
        },
        component: () => import('@/view/account-detail/AccountDetailMain.vue')
      },
      {
        path: 'FundsRecharge',
        name: 'funds_recharge',
        meta: {
          title: '充值管理',
          icon: 'md-add-circle'
        },
        component: () => import('@/view/funds-recharge/FundsRechargeMain.vue')
      },
      {
        path: 'FundsTransfer',
        name: 'funds_transfer',
        meta: {
          title: '转账管理',
          icon: 'md-swap'
        },
        component: () => import('@/view/funds-transfer/FundsTransferMain.vue')
      },
      {
        path: 'FundsFrezee',
        name: 'funds_frezee',
        meta: {
          title: '冻结管理',
          icon: 'md-snow'
        },
        component: () => import('@/view/funds-frezee/FundsFrezeeMain.vue')
      },
      {
        path: 'FundsWithdraw',
        name: 'funds_withdraw',
        meta: {
          title: '提现管理',
          icon: 'md-checkmark-circle'
        },
        component: () => import('@/view/funds-withdraw/FundsWithdrawMain.vue')
      },
      {
        path: 'FundsWithdrawCheck',
        name: 'funds_withdraw_check',
        meta: {
          title: '提现审核管理',
          icon: 'md-open'
        },
        component: () => import('@/view/funds-withdraw-check/FundsWithdrawCheckMain.vue')
      },
      {
        path: 'UserWithdrawCheck',
        name: 'funds_withdraw_check_query',
        meta: {
          title: '提现审核查询',
          icon: 'ios-pint'
        },
        component: () => import('@/view/user-withdraw-check/UserWithdrawCheckMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'platform_account',
    meta: {
      icon: 'logo-yen',
      title: '平台资金管理'
    },
    component: Main,
    children: [
      {
        path: 'PlatformAccountDetail',
        name: 'platform_account_detail',
        meta: {
          title: '平台账目详情管理',
          icon: 'md-flask'
        },
        component: () => import('@/view/platform-account-detail/PlatformAccountDetailMain.vue')
      },
      {
        path: 'UserAccountDetail',
        name: 'user_account_manage1',
        meta: {
          title: '用户账目详情管理',
          icon: 'md-list-box'
        },
        component: () => import('@/view/account-detail/AccountDetailMain.vue')
      },
      {
        path: 'GoodsOrderAccount',
        name: 'goods_order_account',
        meta: {
          title: '订单账目管理',
          icon: 'md-calculator'
        },
        component: () => import('@/view/goods-order-account/GoodsOrderAccountMain.vue')
      },
      {
        path: 'GoodsOrderAccountDetail',
        name: 'goods_order_account_detail',
        meta: {
          title: '订单账目详情管理',
          icon: 'md-list'
        },
        component: () => import('@/view/goods-order-account-detail/GoodsOrderAccountDetailMain.vue')
      },
    ]
  },
  {
    path: '/admin',
    name: 'ad_management',
    meta: {
      icon: 'md-globe',
      title: '广告管理'
    },
    component: Main,
    children: [
      {
        path: 'AdvertisementType',
        name: 'ads_type_management',
        meta: {
          title: '广告类别管理',
          icon: 'md-flask'
        },
        component: () => import('@/view/advertisement-type/AdvertisementTypeMain.vue')
      },
      {
        path: 'Advertisement',
        name: 'ads_management',
        meta: {
          title: '广告管理',
          icon: 'md-image'
        },
        component: () => import('@/view/advertisement/AdvertisementMain.vue')
      },
      {
        path: 'AdvertisementQuery',
        name: 'ads_query',
        meta: {
          title: '广告及类别查询',
          icon: 'ios-paper'
        },
        component: () => import('@/view/adtype-ads/AdvertisementTypeAdsMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'cms_management',
    meta: {
      icon: 'ios-book',
      title: '内容管理'
    },
    component: Main,
    children: [
      {
        path: 'ArticleCategory',
        name: 'article_category',
        meta: {
          title: '文章类别管理',
          icon: 'md-filing'
        },
        component: () => import('@/view/article-category/ArticleCategoryMain.vue')
      },
      {
        path: 'Article',
        name: 'article_management',
        meta: {
          title: '文章管理',
          icon: 'ios-paper'
        },
        component: () => import('@/view/article/ArticleMain.vue')
      },
      {
        path: 'ArticleComment',
        name: 'article_comment',
        meta: {
          title: '文章评论管理',
          icon: 'ios-text'
        },
        component: () => import('@/view/article-comment/ArticleCommentMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'mall_management',
    meta: {
      icon: 'ios-cart',
      title: '商城管理'
    },
    component: Main,
    children: [
      {
        path: 'GoodsBasic',
        name: 'goods_basic_management',
        meta: {
          icon: 'ios-create',
          title: '商城基础信息管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsAttribute',
            name: 'goods_attribute',
            meta: {
              icon: 'ios-keypad',
              title: '商品属性管理'
            },
            component: () => import('@/view/goods-attribute/GoodsAttributeMain.vue')
          },
          {
            path: 'GoodsCategory',
            name: 'goods_category',
            meta: {
              icon: 'md-funnel',
              title: '商品类目管理'
            },
            component: () => import('@/view/goods-category/GoodsCategoryMain.vue')
          },
          {
            path: 'CategoryAttribute',
            name: 'category_attribute',
            meta: {
              icon: 'md-link',
              title: '类目属性查询'
            },
            component: () => import('@/view/goods-category-attr/GoodsCategoryAttributeMain.vue')
          }
        ]
      },
      {
        path: 'shops',
        name: 'shops_management',
        meta: {
          icon: 'logo-skype',
          title: '店铺管理'
        },
        component: parentView,
        children: [
          {
            path: 'Shop',
            name: 'shop_info',
            meta: {
              icon: 'ios-grid',
              title: '店铺管理'
            },
            component: () => import('@/view/goods-shop/GoodsShopMain.vue')
          },
          {
            path: 'ShopCertificate',
            name: 'shop_certificate',
            meta: {
              icon: 'md-checkmark-circle',
              title: '店铺认证管理'
            },
            component: () => import('@/view/goods-shop-certification/GoodsShopCertificationMain.vue')
          },
          {
            path: 'ShopCheck',
            name: 'shop_check',
            meta: {
              icon: 'md-checkbox',
              title: '店铺审核历史查询'
            },
            component: () => import('@/view/shop-certification-check/GoodsShopCertificationCheckMain.vue')
          }
        ]
      },
      {
        path: 'goods',
        name: 'goods_management',
        meta: {
          icon: 'ios-globe',
          title: '商品管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsInfo',
            name: 'goods_info',
            meta: {
              icon: 'md-grid',
              title: '商品管理'
            },
            component: () => import('@/view/goods-info/GoodsInfoMain.vue')
          },
          {
            path: 'GoodsSku',
            name: 'goods_sku',
            meta: {
              icon: 'ios-grid-outline',
              title: '商品SKU管理'
            },
            component: () => import('@/view/goods-sku/GoodsSkuMain.vue')
          },
          {
            path: 'GoodsInfoSkuPic',
            name: 'goods_info_sku_pic',
            meta: {
              icon: 'md-aperture',
              title: '商品SKU查询'
            },
            component: () => import('@/view/goods-info-sku-pic/GoodsInfoSkuPicMain.vue')
          },
          {
            path: 'GoodsDetail',
            name: 'goods_detail',
            meta: {
              icon: 'ios-grid',
              title: '商品SKU属性查询'
            },
            component: () => import('@/view/goods-sku-attr-val/GoodsSkuAttributeValueMain.vue')
          }
        ]
      },
      {
        path: 'goods_activity',
        name: 'goods_activity_management',
        meta: {
          icon: 'logo-euro',
          title: '商品活动管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsHot',
            name: 'goods_hot',
            meta: {
              icon: 'md-flame',
              title: '热门商品管理'
            },
            component: () => import('@/view/goods-hot/GoodsHotMain.vue')
          },
          {
            path: 'GoodsPromotion',
            name: 'goods_promotion',
            meta: {
              icon: 'md-arrow-down',
              title: '促销商品管理'
            },
            component: () => import('@/view/goods-promotion/GoodsPromotionMain.vue')
          },
          {
            path: 'GoodsAgent',
            name: 'goods_agent',
            meta: {
              icon: 'ios-ribbon',
              title: '代理商商品管理'
            },
            component: () => import('@/view/goods-agent/GoodsAgentMain.vue')
          },
          {
            path: 'GoodsGroupon',
            name: 'goods_groupon',
            meta: {
              icon: 'ios-people',
              title: '拼团商品管理'
            },
            component: () => import('@/view/goods-groupon/GoodsGrouponMain.vue')
          },
          {
            path: 'GoodsSeckill',
            name: 'goods_seckill',
            meta: {
              icon: 'md-stopwatch',
              title: '秒杀商品管理'
            },
            component: () => import('@/view/goods-seckill/GoodsSeckillMain.vue')
          }
        ]
      },
      {
        path: 'cart',
        name: 'carts_management',
        meta: {
          icon: 'ios-cart',
          title: '购物车管理'
        },
        component: parentView,
        children: [
          {
            path: 'Cart',
            name: 'cart_management',
            meta: {
              icon: 'md-cart',
              title: '购物车管理'
            },
            component: () => import('@/view/goods-cart/GoodsCartMain.vue')
          },
          {
            path: 'CartQuery',
            name: 'cart_query',
            meta: {
              icon: 'ios-cart',
              title: '购物车查询'
            },
            component: () => import('@/view/user-goods-cart/UserGoodsCartMain.vue')
          }
        ]
      },
      {
        path: 'orders',
        name: 'orders_management',
        meta: {
          icon: 'md-list',
          title: '订单管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsOrder',
            name: 'goods_order',
            meta: {
              icon: 'md-basket',
              title: '订单管理'
            },
            component: () => import('@/view/goods-order/GoodsOrderMain.vue')
          },
          {
            path: 'GoodsOrderItem',
            name: 'goods_order_item',
            meta: {
              icon: 'ios-basket',
              title: '订单项管理'
            },
            component: () => import('@/view/goods-order-item/GoodsOrderItemMain.vue')
          },
          {
            path: 'OrderLogistics',
            name: 'order_logistics',
            meta: {
              icon: 'md-bus',
              title: '订单物流管理'
            },
            component: () => import('@/view/goods-order-logistics/GoodsOrderLogisticsMain.vue')
          },
          {
            path: 'OrderQuery',
            name: 'order_query',
            meta: {
              icon: 'md-bookmarks',
              title: '用户订单查询'
            },
            component: () => import('@/view/user-goods-order/UserGoodsOrderMain.vue')
          },
          {
            path: 'OrderItemQuery',
            name: 'order_item_query',
            meta: {
              icon: 'ios-bookmarks',
              title: '用户订单项查询'
            },
            component: () => import('@/view/user-goods-order-item/UserGoodsOrderItemMain.vue')
          },
          {
            path: 'OrderLogisticsQuery',
            name: 'order_logistics_query',
            meta: {
              icon: 'ios-bus',
              title: '用户订单物流查询'
            },
            component: () => import('@/view/user-goods-order-logistics/UserGoodsOrderLogisticsMain.vue')
          }
        ]
      },
      {
        path: 'mall_goods_order_account',
        name: 'mall_goods_order',
        meta: {
          icon: 'logo-yen',
          title: '订单账目管理'
        },
        component: parentView,
        children: [
          {
            path: 'MallGoodsOrderAccount',
            name: 'mall_goods_order_account',
            meta: {
              title: '订单账目管理',
              icon: 'md-calculator'
            },
            component: () => import('@/view/goods-order-account/GoodsOrderAccountMain.vue')
          },
          {
            path: 'MallGoodsOrderAccountDetail',
            name: 'mall_goods_order_account_detail',
            meta: {
              title: '订单账目详情管理',
              icon: 'md-list'
            },
            component: () => import('@/view/goods-order-account-detail/GoodsOrderAccountDetailMain.vue')
          },
        ]
      },
      {
        path: 'goods_collection',
        name: 'goods_collection',
        meta: {
          icon: 'md-heart',
          title: '收藏管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsCollection',
            name: 'goods_collection_management',
            meta: {
              icon: 'md-heart-outline',
              title: '商品收藏管理'
            },
            component: () => import('@/view/goods-collection/GoodsCollectionMain.vue')
          },
          {
            path: 'UserGoodsCollection',
            name: 'goods_collection_query',
            meta: {
              icon: 'md-done-all',
              title: '用户商品收藏查询'
            },
            component: () => import('@/view/user-goods-collection/UserGoodsCollectionMain.vue')
          }
        ]
      },
      {
        path: 'goods_comment',
        name: 'goods_comment',
        meta: {
          icon: 'md-rose',
          title: '评论管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsComment',
            name: 'goods_comment_management',
            meta: {
              icon: 'ios-rose-outline',
              title: '商品评论管理'
            },
            component: () => import('@/view/goods-comment/GoodsCommentMain.vue')
          },
          {
            path: 'UserGoodsComment',
            name: 'goods_comment_query',
            meta: {
              icon: 'ios-rose',
              title: '用户商品评论查询'
            },
            component: () => import('@/view/user-goods-comment/UserGoodsCommentMain.vue')
          }
        ]
      },
      {
        path: 'coupons',
        name: 'coupons_management',
        meta: {
          icon: 'ios-medal',
          title: '优惠券管理'
        },
        component: parentView,
        children: [
          {
            path: 'GoodsCoupon',
            name: 'goods_coupon',
            meta: {
              icon: 'md-medal',
              title: '优惠券管理'
            },
            component: () => import('@/view/demo/ComingSoon.vue')
          },
          {
            path: 'UserCoupon',
            name: 'user_coupon',
            meta: {
              icon: 'md-star',
              title: '用户优惠券管理'
            },
            component: () => import('@/view/demo/ComingSoon.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'distribution_management',
    meta: {
      icon: 'md-share',
      title: '分销管理'
    },
    component: Main,
    children: [
      {
        path: 'UserHierarchyQuery',
        name: 'user_hierarchy_query',
        meta: {
          title: '用户层级关系查询',
          icon: 'md-git-branch'
        },
        component: () => import('@/view/user-userhierarchy/UserUserHierarchyMain.vue')
      },
      {
        path: 'UserPath',
        name: 'user_path_management',
        meta: {
          title: '用户路径管理',
          icon: 'md-git-network'
        },
        component: () => import('@/view/user-path/UserPathMain.vue')
      },
      {
        path: 'TopDistribution',
        name: 'top_distribution',
        meta: {
          title: '顶级分销商查询',
          icon: 'ios-thumbs-up'
        },
        component: () => import('@/view/distribution/TopDistributionMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'processes_management',
    meta: {
      icon: 'md-repeat',
      title: '流程管理'
    },
    component: Main,
    children: [
      {
        path: 'Process',
        name: 'process_management',
        meta: {
          title: '流程文件管理',
          icon: 'md-swap'
        },
        component: () => import('@/view/process/ProcessMain.vue')
      },
      {
        path: 'ProcessDeployment',
        name: 'process_deployment_management',
        meta: {
          title: '流程部署管理',
          icon: 'md-sync'
        },
        component: () => import('@/view/activiti-deployment/ActivitiDeploymentMain.vue')
      },
      {
        path: 'ProcessDefinition',
        name: 'process_definition_management',
        meta: {
          title: '流程定义管理',
          icon: 'md-switch'
        },
        component: () => import('@/view/activiti-definition/ActivitiDefinitionMain.vue')
      },
      {
        path: 'ProcessInstance',
        name: 'process_instance_management',
        meta: {
          title: '流程实例管理',
          icon: 'ios-browsers'
        },
        component: () => import('@/view/activiti-instance/ActivitiInstanceMain.vue')
      },
      {
        path: 'ProcessTask',
        name: 'process_task_management',
        meta: {
          title: '流程任务管理',
          icon: 'ios-stopwatch'
        },
        component: () => import('@/view/activiti-task/ActivitiTaskMain.vue')
      },
      {
        path: 'HistoricProcess',
        name: 'historic_process_management',
        meta: {
          title: '流程历史管理',
          icon: 'ios-barcode'
        },
        component: () => import('@/view/activiti-his-instance/ActivitiHisInstanceMain.vue')
      },
      {
        path: 'ProcessDesign',
        name: 'process_design',
        meta: {
          title: '流程在线设计',
          href: baseUrl + ':8080/activiti-app',
          icon: 'md-pricetag'
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'report_statistics_management',
    meta: {
      icon: 'ios-podium',
      title: '报表统计管理'
    },
    component: Main,
    children: [
      {
        path: 'StatisticsDau',
        name: 'statistics_dau',
        meta: {
          title: 'DAU统计管理',
          icon: 'ios-walk'
        },
        component: () => import('@/view/statistics-dau/StatisticsDauMain.vue')
      },
      {
        path: 'DauReport',
        name: 'dau_report',
        meta: {
          title: 'DAU统计报表',
          icon: 'ios-stats'
        },
        component: () => import('@/view/statistics-dau/dau-report.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'system_premissoin_manage',
    meta: {
      icon: 'ios-lock',
      title: '系统权限管理'
    },
    component: Main,
    children: [
      {
        path: 'Role',
        name: 'role_manage',
        meta: {
          title: '角色管理',
          icon: 'md-lock'
        },
        component: () => import('@/view/role/RoleMain.vue')
      },
      {
        path: 'Module',
        name: 'module_manage',
        meta: {
          title: '模块管理',
          icon: 'ios-list-box'
        },
        component: () => import('@/view/module/ModuleMain.vue')
      },
      {
        path: 'Permission',
        name: 'permission_manage',
        meta: {
          title: '权限管理',
          icon: 'ios-key'
        },
        component: () => import('@/view/permission/PermissionMain.vue')
      },
			{
			  path: 'ModulePermission',
			  name: 'module_permission_query',
			  meta: {
			    title: '模块权限查询',
			    icon: 'md-options'
			  },
			  component: () => import('@/view/module-permission/ModulePermissionMain.vue')
			},
			{
				path: 'role-permission-page',
				name: 'role_permission_query',
				meta: {
					title: '角色权限查询',
					icon: 'md-key'
				},
				component: () => import('@/view/role-permission/RolePermissionMain.vue')
			}
    ]
  },
  {
    path: '/admin',
    name: 'sys_content_manage',
    meta: {
      icon: 'md-book',
      title: '系统内容管理'
    },
    component: Main,
    children: [
      {
        path: 'SysConfig',
        name: 'system_config',
        meta: {
          title: '系统配置管理',
          icon: 'ios-cog'
        },
        component: () => import('@/view/sys-config/SysConfigMain.vue')
      },
      {
        path: 'Notice',
        name: 'system_notice',
        meta: {
          title: '系统公告管理',
          icon: 'ios-notifications'
        },
        component: () => import('@/view/notice/NoticeMain.vue')
      },
      {
        path: 'Message',
        name: 'system_message',
        meta: {
          title: '消息管理',
          icon: 'ios-information-circle'
        },
        component: () => import('@/view/message/MessageMain.vue')
      },
      {
        path: 'UserMessage',
        name: 'user_message',
        meta: {
          title: '用户消息查询',
          icon: 'ios-information-circle'
        },
        component: () => import('@/view/user-usermessage/UserUserMessageMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'system_monitoring',
    meta: {
      icon: 'md-eye',
      title: '缓存管理'
    },
    component: Main,
    children: [
			{
			  path: 'SysLog',
			  name: 'system_log',
			  meta: {
			    title: '系统日志管理',
			    icon: 'ios-paper'
			  },
			  component: () => import('@/view/sys-log/SysLogMain.vue')
			},
			{
			  path: 'Scheduler',
			  name: 'timing_task',
			  meta: {
			    title: '定时任务管理',
			    icon: 'md-time'
			  },
			  component: () => import('@/view/scheduler/SchedulerMain.vue')
			},
      {
        path: 'RedisCache',
        name: 'redis_cache',
        meta: {
          title: 'Redis缓存管理',
          icon: 'ios-ionitron'
        },
        component: () => import('@/view/redis-cache/RedisCache.vue')
      },
      {
        path: 'DruidSql',
        name: 'druid_sql',
        meta: {
          title: 'Druid SQL监控',
          href: baseUrl + ':8088/druid/index.html',
          icon: 'md-trending-up'
        }
      },
      {
        path: 'SpringBootAdmin',
        name: 'spring_boot_admin',
        meta: {
          title: 'SpringBoot Admin',
          href: baseUrl + ':8086',
          icon: 'md-speedometer'
        }
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
