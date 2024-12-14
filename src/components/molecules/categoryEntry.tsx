"use client"

import { ICategory,  IDocument, widgetTypes } from "@/scripts/util"
import { ChartBarStacked, FileText, Folder, Pencil, Plus, Trash2 } from "lucide-react"
import { ReactNode, useState } from "react"

interface IItemEntry {
  item: ICategory | IDocument
  compact: boolean
  type: widgetTypes
}

const ItemEntry = ({item, compact, type}: IItemEntry) => {
  const [collapsed, setCollapsed] = useState(true)
  console.log(type, item)
  return (
    <div className="item_entry mb-5">
      <div className={`
      w-full bg-blue-600  border rounded-lg p-${['all', 'category'].includes(type) ? 5 : 2} 
      text-white text-xl ${['all', 'category'].includes(type) ? `font-bold` : ''} 
      flex items-center mt-3 ${!compact ? 'justify-between': ''}
      cursor-pointer
      `}
      onClick={() => setCollapsed(!collapsed)}
      >
        <div>
          {type === 'category' ?
            (item as ICategory).categories.length ?
            <Folder className="inline-block mr-3"/> :
            <ChartBarStacked className="inline-block mr-3"/>
          :
          <FileText className="inline-block mr-3"/>
          }
          {item.title}
        </div>
        {!compact ? <div>
          <Plus className="inline-block mr-2"/>
          <Pencil className="inline-block mr-2"/>
          <Trash2 className="inline-block mr-2"/>

        </div> : ''}
      </div>
      <div className={`
        pl-10 space-y-3 overflow-hidden ${collapsed ? "max-h-0" : ""}
        transition-all duration-200
      `}>
      {type === 'category' ? (item as ICategory)?.categories?.map(item => (
        <ItemEntry item={item} compact type={'category'}/>
      )) : ''}
       {
        // @ts-ignore
       item.documents?.length ? (item as ICategory)?.documents?.map(item => (
        <ItemEntry item={item} compact type="document"/>
      )) : ''
      }
      </div>

    </div>
  )
}

export default ItemEntry