simultaneous_order_table_1 as (   ----------------PARA CALCULAR ORDENES SIMULTANEAS------------
  select
    orders.country_id,
    orders.order_id,
    orders.created_at::datetime as created_at,
    coalesce(orders.closed_at, cancels.canceled_at, orders.created_at)::datetime as order_closed_at,
    orders.user_id
    from fraud_ds.orders_marketplace as orders
    left join ops_global.cancellation_reasons as cancels
      on orders.order_id = cancels.order_id
      and orders.country_id = lower(cancels.country)
  where orders.created_at::date >= current_date - interval '18w'
)
,simultaneous_order_table_2 as (
  select *,
    lag(order_closed_at)
        over (partition by user_id 
              order by created_at, order_id
             ) as previous_order_closed_at
  from simultaneous_order_table_1
)
,gasto_table as (
  select                                            ---------------------------PARA GASTO DE CANCELACION-------------------------------
	'ar' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_ar
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
  select 
	'br' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_br
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
   select                                       
	'cl' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_cl
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
   select                                       
	'co' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_co
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
   select                                       
	'cr' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_cr
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
   select                                       
	'ec' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_ec
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
  select                                       
	'mx' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_mx
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
  select                                       
	'pe' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_pe
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
  union all
  select                                       
	'uy' as country_id,
	order_id,
	gasto_canceladas
  from global_payments.tbl_ue_partner_payment_uy
  where rejected_by_fraud = 'false'
  and transaction_date::date >= current_date - interval '18w'
)
,delivery_table as (                                ----------------------------------TABLAS POR PAIS---------------------------------
  select                                            ---------------------------PARA METODO DE DELIVERY-------------------------------
	'ar' as country_id,
	order_id,
	'ar-' || order_id::varchar as order_pk,
	delivery_method
  from ar_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'br' as country_id,
	order_id,
	'br-' || order_id::varchar as order_pk,
	delivery_method
  from br_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'cl' as country_id,
	order_id,
	'cl-' || order_id::varchar as order_pk,
	delivery_method
  from cl_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'co' as country_id,
	order_id,
	'co-' || order_id::varchar as order_pk,
	delivery_method
  from co_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'cr' as country_id,
	order_id,
	'cr-' || order_id::varchar as order_pk,
	delivery_method
  from cr_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'ec' as country_id,
	order_id,
	'ec-' || order_id::varchar as order_pk,
	delivery_method
  from ec_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'mx' as country_id,
	order_id,
	'mx-' || order_id::varchar as order_pk,
	delivery_method
  from mx_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'pe' as country_id,
	order_id,
	'pe-' || order_id::varchar as order_pk,
	delivery_method
  from pe_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'uy' as country_id,
	order_id,
	'uy-' || order_id::varchar as order_pk,
	delivery_method
  from uy_core_orders_public.delivery_order
  where created_at::date >= current_date - interval '18w'
)

,user_segmentation_table as (                 ----------------------SEGEMENTACION DEL USUARIO--------------------------
  select
	'ar' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.ar_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'br' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.br_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'cl' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.cl_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'co' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.co_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
 select
	'cr' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.cr_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'ec' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.ec_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'mx' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.mx_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'pe' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.pe_user_segmentation
  where created_at::date >= current_date - interval '18w'
  union all
  select
	'uy' as country_id,
	application_user_id,
	created_at,
	segment_rfm,
	maturity,
	look_alike_score
  from global_support_ds.uy_user_segmentation
  where created_at::date >= current_date - interval '18w'
)

,split_table as (       ----------------------ORDENES EN SPLIT-----------------------
  select
    'ar' as country_id,
    id as order_id,
    'ar-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from ar_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'br' as country_id,
    id as order_id,
    'br-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from br_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'cl' as country_id,
    id as order_id,
    'cl-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from cl_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'co' as country_id,
    id as order_id,
    'co-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from co_core_orders_public.orders_vw
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'cr' as country_id,
    id as order_id,
    'cr-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from cr_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'ec' as country_id,
    id as order_id,
    'ec-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from ec_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'mx' as country_id,
    id as order_id,
    'mx-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from mx_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'pe' as country_id,
    id as order_id,
    'pe-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from pe_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
  union all
  select
    'uy' as country_id,
    id as order_id,
    'uy-' || id as order_pk,
    count(*) over(partition by split_id) as orders_by_split
  from uy_core_orders_public.orders
  where created_at::date >= current_date - interval '18w'
    and split_id is not null
)

,raw_table as (   ----------------------------------TABLA PRINCIPAL----------------------------------------
  select 
    orders.country_id,
    orders.user_id,
    orders.order_id,
    orders.created_at::date as created_at,
    orders.created_at::datetime < simult.previous_order_closed_at as simultaneous_order,
	delivery.delivery_method,
    gast.gasto_canceladas,
    segm.maturity,
	(global.gmv - orders.tip - ifnull(orders.shipping_cost, 0)) / trm.trm as products_value,
    global.gmv_usd,
	global.state_type,
	cancels.cancelation_reason,
    cancels.cancel_reason_description,
    cancels.cancel_reason_description ilike '%fraud%' description_fraud,
    global.vertical,
    global.gmv_score,
    datediff(day, global.first_order_at_all::datetime, orders.created_at::datetime) as account_age_first_order_days,
    case 
	  when global.vertical = 'CPGS' then has_handshake_cpgs
	  else courier.has_handshake
	end as has_handshake,
    orders.cooking_time is not null as has_take,
    (select count(*)
     from global_finances.global_orders as orders2
     where orders2.application_user_id = orders.user_id
        and orders2.created_at::datetime < orders.created_at::datetime
        and orders2.order_state in ('pending_review', 'finished')
    ) as finished_orders,
    (select sum(orders2.total_value_usd)
     from global_finances.global_orders as orders2
     where orders2.application_user_id = orders.user_id
        and orders2.created_at::datetime < orders.created_at::datetime
	    and orders2.order_state in ('pending_review', 'finished')
    ) as finished_orders_gmv,
	(select count(*)
       from fraud_ds.orders_marketplace as mkt
         where mkt.user_id = orders.user_id
          and mkt.created_at < orders.created_at
          and mkt.created_at >= orders.created_at - interval '720 hours'
          and mkt.state in ('pending_review', 'finished')
    ) as finished_orders_qty_1h,
    (select count(*)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '1 hour'
    ) as canceled_by_user_qty_1h,
    (select count(*)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '24 hours'
    ) as canceled_by_user_qty_1d,
    (select count(*)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '168 hours'
    ) as canceled_by_user_qty_7d,
    (select count(*)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '720 hours'
    ) as canceled_by_user_qty_30d,
    (select sum(total_value_usd)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '1 hour'
    ) as canceled_by_user_amount_1h,
    (select sum(total_value_usd)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '24 hours'
    ) as canceled_by_user_amount_1d,
    (select sum(total_value_usd)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '168 hours'
    ) as canceled_by_user_amount_7d,
    (select sum(total_value_usd)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state in ('canceled', 'canceled_with_charge')
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '720 hours'
    ) as canceled_by_user_amount_30d,
    (select count(*)
     from fraud_ds.orders_marketplace as orders2 
     where orders2.user_id = orders.user_id 
        and orders2.created_at < orders.created_at
        and orders2.created_at >= orders.created_at - interval '1 hour'
        and orders2.state = 'canceled_by_fraud'
    ) as canceled_by_fraud_qty_1h,
    (select count(*)
     from fraud_ds.orders_marketplace as orders2
     where orders2.user_id = orders.user_id
        and orders2.state = 'canceled_by_automation'
        and orders2.created_at < orders.created_at
    ) as cancel_by_automation,
    (select count(*)
       from fraud_ds.orders_marketplace as orders2
       where orders2.user_id = orders.user_id
          and orders2.created_at > orders.created_at
		  and orders2.state in ('pending_review', 'finished')
    ) as finished_orders_after,
     case
		when segm.maturity is null then 'New'
		else segm.maturity
	end as maturity,
    orders.device_id,
    global.device_score,
    global.device,
    (select count(distinct orders.user_id)
     from fraud_ds.orders_marketplace as orders
     where orders.device_id = orders.device_id
        and orders.country_id = orders.country_id
        and orders.created_at < orders.created_at
        and orders.created_at::date >= orders.created_at - interval '720 hours'
		and orders.device_id <> 'device_id_fake'
    ) as network_device_30d,
    verification.email like '%@rappi.com' as qa_email,
	verification.email like any ('%gamail.com', '%gamil.com', '%gemail.com', '%gimail.com', '%gma.com', '%gmai.com', '%gmaik.com', '%gmail.cl', '%gmail.comm', '%gmail.con', '%gmaill.com', '%gmaim.com', '%gmal.com', '%gmaul.com', '%gmial.com', '%gmil.com', '%gmsil.com', '%gnail.com', '%homail.com', '%hormail.com', '%hotail.com', '%hotamil.com', '%hotmai.com', '%hotmail.con', '%hotmaill.com', '%hotmaio.com', '%hotmal.com', '%hotmaul.com', '%hotmial.com', '%hotmil.com', '%hotmsil.com', '%hotnail.com', '%hoymail.com', '%oulook.com', '%outlok.com', '%outloo.com', '%outlook.con', '%yaho.com') as false_positive_domain,
    case
      when verification.email_status is null then 'UNVERIFIED'
      else verification.email_status
    end as email_status,
    case
      when risk.decided_by_control_group = 1 then true
      else false
    end as control_group,
	(select count(*)
     from global_finances.global_orders as orders2
     where orders2.application_user_id = orders.user_id
        and orders2.order_state in ('canceled', 'canceled_with_charge')
        and orders2.created_at::datetime < orders.created_at::datetime
    ) as canceled_by_user_qty,
  ifnull(
	  (select sum(orders.total_value_usd)
	   from fraud_ds.orders_marketplace as orders
	   where orders.store_id = orders.store_id
		  and orders.country_id = orders.country_id
		  and orders.created_at < orders.created_at
		  and orders.created_at >= orders.created_at - interval '168 hours'
		  and orders.state in ('canceled', 'canceled_with_charge')
	  ), 0) as store_canceled_by_user_amount_7d,
	ifnull(
	  (select sum(orders.total_value_usd)
	   from fraud_ds.orders_marketplace as orders
	   where orders.address_geohash_8 = orders.address_geohash_8
		  and orders.created_at < orders.created_at
		  and orders.created_at >= orders.created_at - interval '168 hours'
		  and orders.state in ('canceled', 'canceled_with_charge')
	  ), 0) as geohash_canceled_by_user_amount_7d,
  	ifnull(
	  (select sum(orders.total_value_usd)
	   from fraud_ds.orders_marketplace as orders
	   where orders.store_id = orders.store_id
		  and orders.country_id = orders.country_id
		  and orders.created_at < orders.created_at
		  and orders.created_at >= orders.created_at - interval '168 hours'
		  and orders.state in ('pending_review', 'finished')
	  ), 0) as store_approved_amount_7d,
    	ifnull(
	  (select sum(orders.total_value_usd)
	   from fraud_ds.orders_marketplace as orders
	   where orders.address_geohash_8 = orders.address_geohash_8
		  and orders.created_at < orders.created_at
		  and orders.created_at >= orders.created_at - interval '168 hours'
		  and orders.state in ('pending_review', 'finished')
	  )
	, 0) as geohash_approved_amount_7d,
	ifnull(split.orders_by_split, 1) as orders_by_split
  from fraud_ds.orders_marketplace as orders
	join global_finances.global_orders as global
	  on global.order_id = orders.order_id
	  and lower(global.country) = orders.country_id
    join global_finances.trm_fixed as trm
      on lower(trm.country_code) = orders.country_id
    left join ops_global.cancellation_reasons as cancels
      on orders.order_id = cancels.order_id
      and orders.country_id = lower(cancels.country)
    join simultaneous_order_table_2 as simult
      on simult.country_id = orders.country_id
      and simult.order_id = orders.order_id
    left join fraud_ds.courier_order_summary as courier
      on courier.order_id = orders.order_id
      and courier.country_id = orders.country_id
      and courier.storekeeper_id = orders.storekeeper_id::varchar
    left join co_pg_ms_email_verification_api_public.verification as verification
      on verification.user_id = orders.user_id
    left join fraud_ds.orders_risk as risk
      on risk.country_id = orders.country_id
      and risk.order_id = orders.order_id
      and risk.event = 'create_order'
	left join delivery_table as delivery
	  on delivery.order_pk = orders.order_pk
	left join split_table as split
	  on split.order_pk = orders.order_pk
    left join gasto_table as gast
      on gast.order_id = orders.order_id
    left join user_segmentation_table as segm
      on segm.application_user_id = orders.user_id
	  and segm.created_at::date = orders.created_at::date
	  and segm.country_id = orders.country_id
  where orders.created_at::date >= current_date - interval '18w'
    and global.state_type in ('CANCELED_BY_USER', 'CANCELED_BY_OPS', 'CANCELED_BY_FRAUD', 'CANCELED_BY_APPLICATION', 'ALLIED_FRAUD_ORDER')
	and (orders.storekeeper_id is not null 
		 or orders.cooking_time is not null
		 or (orders.payment_method = 'rappi_pay_gateway' and cancels.who_canceled = 'user')
		)
	and (cancels.level_3 not like '%store_closed%' or global.state_type = 'CANCELED_BY_FRAUD')
	and orders.store_type <> 'restaurant_cargo'
)
,processed_table_1 as (  ----------------TABLA DE RATES-------------------
  select *,
	case
	  when (raw.store_canceled_by_user_amount_7d + raw.store_approved_amount_7d) > 0
	    then raw.store_canceled_by_user_amount_7d / (raw.store_approved_amount_7d + raw.store_canceled_by_user_amount_7d)
	  else 0
	end as store_cancel_rate,
	case
	  when (raw.geohash_approved_amount_7d + raw.geohash_canceled_by_user_amount_7d) > 0
	    then raw.geohash_canceled_by_user_amount_7d / (raw.geohash_approved_amount_7d + raw.geohash_canceled_by_user_amount_7d) 
	  else 0
	end as geohash_cancel_rate,
	raw.gasto_canceladas,
  case    
      when (raw.finished_orders + raw.canceled_by_user_qty) > 0
      then raw.canceled_by_user_qty / (raw.finished_orders + raw.canceled_by_user_qty)
      else 0
    end as user_cancel_rate,
	case
	  when (raw.finished_orders + raw.cancel_by_automation) > 0
		then raw.cancel_by_automation / (raw.finished_orders + raw.cancel_by_automation)
	  else 0
	end as cancel_by_automation_rate
  from raw_table as raw
)
  select               -----------------------SELECT FINAL----------- RISKY_USER Y FINANCIAL_LOSS-----------------
    *,
    case
      when (finished_orders < 5
        or finished_orders_gmv < 50
		or account_age_first_order_days < 30
		or maturity = 'New'
		)
        then true
      else false
    end as new_user,
    case
      when (gmv_score >= 4 
        and device_score >= 4
        and device <> 'OTRO'
        and (email_status <> 'BOUNCED' or 
             (email_status = 'BOUNCED' and false_positive_domain = true)
            )
        and network_device_30d <= 2
		and user_blocked = false
        and user_cancel_rate < 0.3
		and (store_cancel_rate < 0.3 or store_canceled_by_user_amount_7d < 40)
		and (geohash_cancel_rate < 0.3 or geohash_canceled_by_user_amount_7d < 40)
		and finished_orders_after > 0
		and canceled_by_fraud_qty_1h = 0
           )
		or wrong_address = true
        or qa_email = true
		or ((simultaneous_order = true or orders_by_split > 1)
            and (finished_orders_qty_1h > 0 and cancelation_reason in ('crsan_duplicated_order', 'crsan_client_doesnt_have_how_to_pay')
				)
			)
		or cancel_reason_description ilike '%masivo%'
        then false
      when canceled_by_user_qty_1h > 0
		or canceled_by_user_qty_1d > 1 
		or canceled_by_user_qty_7d > 2
		or canceled_by_user_qty_30d > 9
		or canceled_by_user_amount_1h > 50
		or canceled_by_user_amount_1d > 100
		or canceled_by_user_amount_7d > 200
		or canceled_by_user_amount_30d > 500
        or network_device_30d > 2
        or (email_status = 'BOUNCED' and false_positive_domain = false)
        or (user_cancel_rate >= 0.4 and canceled_by_user_qty_30d > 2)
        or (simultaneous_order = true or orders_by_split > 1)
        or (vertical = 'RESTAURANTES' and gmv_usd > 40) 
        or gmv_usd > 100
        or description_fraud = true
		or (store_cancel_rate >= 0.5 and store_canceled_by_user_amount_7d >= 30)
		or (geohash_cancel_rate >= 0.5 and geohash_canceled_by_user_amount_7d >= 30)
		or chat_deposit_recharge = true
		or (products_value > 20 and finished_orders = 0 and churn in ('High', 'Lost'))
		or (cancel_by_automation > 2 and cancel_by_automation_rate >= 0.5)
		or canceled_by_fraud_qty_1h > 4
		or user_blocked = true
		or state_type = 'ALLIED_FRAUD_ORDER'
        then true
      else false
    end as risky_user,
    case
      when vertical = 'RESTAURANTES'
        and has_take = true
		and delivery_method <> 'marketplace'
        then true
      when vertical in ('CPGS', 'E-COMMERCE')
        and has_handshake = true
        then true
      when gasto_canceladas > 0
        then true
      else false
    end as financial_loss
  from raw_table as raw
  inner join processed_table_1 as l
  on l.order_id = raw.order_id