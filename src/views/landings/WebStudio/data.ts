import clutchRatingLight from '@/assets/img/brands/clutch-rating-light.svg'
import clutchRatingDark from '@/assets/img/brands/clutch-rating-dark.svg'
import deloitteLight from '@/assets/img/brands/deloitte-light.svg'
import deloitteDark from '@/assets/img/brands/deloitte-dark.svg'
import vuejsLight from '@/assets/img/brands/vuejs-light.svg'
import vuejsDark from '@/assets/img/brands/vuejs-dark.svg'
import awwwardsLight from '@/assets/img/brands/awwwards-light.svg'
import awwwardsDark from '@/assets/img/brands/awwwards-dark.svg'
import clutchLight from '@/assets/img/brands/clutch-light.svg'
import clutchDark from '@/assets/img/brands/clutch-dark.svg'

import industries01 from '@/assets/img/landing/web-studio/industries/01.jpg'
import industries02 from '@/assets/img/landing/web-studio/industries/02.jpg'
import industries03 from '@/assets/img/landing/web-studio/industries/03.jpg'
import industries04 from '@/assets/img/landing/web-studio/industries/04.jpg'
import industries05 from '@/assets/img/landing/web-studio/industries/02.jpg'

import figma from '@/assets/img/landing/web-studio/skills/figma.svg'
import foster from '@/assets/img/brands/foster.svg'
import css3 from '@/assets/img/landing/web-studio/skills/css3.svg'
import championDark from '@/assets/img/brands/champion-dark.svg'
import championLight from '@/assets/img/brands/champion-light.svg'
import bootstrap from '@/assets/img/landing/web-studio/skills/bootstrap.svg'
import alpine from '@/assets/img/brands/alpine.svg'
import python from '@/assets/img/landing/web-studio/skills/python.svg'

import { webDevelopment, mobileDevelopment, graphicDesign } from '@/assets/icons'

import type { AwardType, IndustryType, ServiceType, SkillCardType } from '@/views/landings/WebStudio/types'

export const awards: AwardType[] = [
  {
    image: {
      light: clutchRatingLight,
      dark: clutchRatingDark
    },
    name: 'Clutch'
  },
  {
    image: {
      light: deloitteLight,
      dark: deloitteDark
    },
    name: 'Deloitte'
  },
  {
    image: {
      light: vuejsLight,
      dark: vuejsDark
    },
    name: 'Vue.js'
  },
  {
    image: {
      light: awwwardsLight,
      dark: awwwardsDark
    },
    name: 'Awwwards'
  },
  {
    image: {
      light: clutchLight,
      dark: clutchDark
    },
    name: 'Clutch'
  }
]

export const services: ServiceType[] = [
  {
    icon: webDevelopment,
    title: 'Web development',
    description: 'Pellentesque bibendum congue massa urna. Tempus hendrerit non molestie nulla enim, est vitae nisl amet.'
  },
  {
    icon: mobileDevelopment,
    title: 'Mobile development',
    description: 'Amet, consectetur rhoncus, libero, morbi malesuada feugiat nulla feugiat mi vitae est pharetra nisi velit tincidunt.'
  },
  {
    icon: graphicDesign,
    title: 'Graphic design',
    description: 'Est, nisl, ornare augue maecenas dis vitae tincidunt interdum tincidunt donec ipsum pellentesque luctus justo.'
  }
]

export const industries: IndustryType[] = [
  {
    image: industries01,
    title: 'Gates for material monitoring',
    description: 'RFID gates provide remote, fully automated detection capabilities with simultaneous bulk reading functionality—dramatically reducing processing time while minimizing error rates. These systems can be seamlessly integrated with visual indicators such as stack lights, printing devices, or display screens for enhanced operational awareness. This comprehensive visualization ensures continuous, clear visibility into all material movement activities.',
    key: 'gates'
  },
  {
    image: industries02,
    title: 'Tunnels for high tag density',
    description: 'RFID tunnels are precision-engineered for environments requiring rapid identification of numerous items in dense configurations at high conveyor speeds. These specialized systems excel at simultaneously identifying multiple objects individually or collectively. Critical information—including material verification, precise location, and timestamp data—is transmitted directly to your host IT infrastructure with no manual intervention. To maximize value from your customized solution, the system delivers near-real-time data to your existing management platforms—whether warehouse management system (WMS), enterprise resource planning (ERP), or quality assurance infrastructure.',
    key: 'tunnels'
  },
  {
    image: industries03,
    title: 'Arches for specific conditions',
    description: 'RFID arches are strategically designed for environments requiring targeted identification of specific items or smaller tag quantities where full tunnel deployment represents excessive investment. These cost-effective systems excel at selective monitoring of individual objects or small batches passing through designated checkpoints. Essential information—including item verification, location tracking, and timestamp data—is captured and transmitted directly to your host IT infrastructure without manual oversight. To optimize return on investment from your tailored solution, the system provides real-time data integration with your existing operational platforms—whether inventory management systems, enterprise resource planning (ERP), or compliance monitoring infrastructure.',
    key: 'arches'
  },
  {
    image: industries04,
    title: 'VAS for quality control',
    description: "RFID value-added stations are key quality checkpoints in modern supply chains, ensuring accuracy during the assembly of pallets, containers, and boxes. By integrating RFID technology, these stations allow operators to perform real-time audits, verifying items as they are loaded. They not only confirm accuracy but also provide detailed, real-time documentation of each load's composition. RFID tags capture data on individual items, which is then transmitted to the central system for quick verification against order specifications. This technology also enables full traceability, creating an auditable record from origin to destination.",
    key: 'vas'
  }
]

export const production: IndustryType[] = [
  {
    image: industries01,
    title: 'High-Speed In-Line Systems',
    description: 'High-speed in-line control is a state-of-the-art solution engineered to guarantee real-time, item-by-item verification in dynamic, high-volume production environments. As production lines operate at full capacity, sustaining speed without compromising accuracy is paramount. This solution seamlessly integrates with existing production systems, augmenting operational efficiency without introducing disruptions or delays in the manufacturing process. It provides a continuous stream of data that empowers operators to monitor and validate each item as it traverses the production line. The system promptly captures and analyzes data pertaining to each product, meticulously verifying its quality, quantity, and specification adherence as items are processed. The system operates with minimal latency, facilitating production to continue at optimal speed while simultaneously conducting thorough quality checks. By automating the verification process, it diminishes the likelihood of errors and ensures that solely products that adhere to predefined standards proceed.',
    key: 'inline'
  },
  {
    image: industries02,
    title: 'Inline Assortment Audit',
    description: 'Inline assortment control is a critical solution designed to ensure the accuracy and completeness of product kits and mixed-item packages during the assembly process. This system provides real-time verification that all components in a kit are present, correctly assembled, and meet the specified requirements before the package is shipped. It integrates seamlessly into the production or packaging lines, ensuring that each item is checked without disrupting the speed or efficiency of operations. Using advanced technologies like RFID, barcode scanning, or computer vision, the inline assortment control system continuously monitors the assembly of kits and packages. As each component is added to the package, the system verifies it against the predefined list of required items, ensuring that no items are missing or incorrect. This prevents errors that could result in incomplete shipments or customer dissatisfaction, which is particularly crucial in industries where accuracy is vital, such as in electronics, pharmaceuticals, or consumer goods. The inline assortment control system helps streamline the packing process by automating checks in real-time, allowing operators to focus on resolving issues as they arise rather than performing manual audits. This also enhances operational efficiency by reducing the need for post-assembly inspections or returns due to errors.',
    key: 'assortment'
  },
  {
    image: industries03,
    title: 'Container Audit Solutions',
    description: 'Container audit solutions are essential for ensuring accuracy across the entire fulfillment process, from inbound shipments to outbound deliveries, and throughout the pick & pack operations. This system provides real-time verification at each stage of container handling, ensuring that all items are correctly identified, counted, and documented. Whether managing the receipt of raw materials or preparing outgoing shipments, container audits allow businesses to achieve consistent quality control and operational efficiency. During inbound operations, the container audit system verifies that the received goods match the purchase orders and shipment documents. In outbound operations, it ensures that the correct items are packed and dispatched according to customer specifications. The pick & pack phase benefits from the system by confirming that each order is accurately assembled, minimizing the risk of shipping errors and improving customer satisfaction. The system uses technologies such as RFID, barcode scanning, or advanced sensors to perform real-time data capture, reducing human error and ensuring accurate tracking. Container audit solutions not only help maintain accuracy but also provide valuable insights into the entire fulfillment process, enabling better inventory management and operational decision-making. The system offers an auditable trail of all activities, enhancing transparency and accountability, which is crucial for both operational efficiency and compliance with industry standards.',
    key: 'container'
  },
  {
    image: industries04,
    title: 'Digital Kanban Systems',
    description: "An RFID-powered digital kanban system transforms component and material management in production environments, eliminating traditional card-based methods and the human errors inherent in manual handling. This technology delivers real-time material consumption data directly to your ERP (Enterprise Resource Planning) system, enabling automated and precise inventory replenishment processes. With instant access to current production metrics at the touch of a button, your operation maintains continuous, fully transparent material flow while simultaneously reducing inventory levels to the absolute minimum required for optimal production.",
    key: 'kanban'
  },
  {
    image: industries05,
    title: 'Sorter optimization',
    description: "RFID transforms sorting efficiency by eliminating the positioning requirements and time delays inherent in barcode scanning. While barcode scanners require 5-9 seconds per item with perfect alignment, RFID readers process items in just 1 second regardless of orientation. This 80-90% time reduction translates to massive labor savings—one major facility reduced their sorting operation from 7-9 operators to just 1 while processing 3 million items annually. The technology's ability to read multiple items simultaneously prevents bottlenecks during peak loads, while providing real-time performance visibility that enables proactive capacity management and operational optimization.",
    key: 'sorter'
  }
]

export const skills: SkillCardType[] = [
  {
    image: { light: figma, dark: figma },
    description: `Figma is convenient online service for interface development and prototyping with the ability to work together in real time.`,
    canFlip: true
  },
  {
    image: { light: foster, dark: foster },
    description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui. Sed condimentum felis at pretium."`
  },
  {
    image: { light: css3, dark: css3 },
    description: `Cascading Style Sheets Level 3 is the iteration of the CSS standard used in the styling and formatting of Web pages.`,
    canFlip: true
  },
  {
    image: { light: championLight, dark: championDark },
    description: `"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget, aliquet ut odio. Curabitur in vestibulum tellus."`
  },
  {
    image: { light: bootstrap, dark: bootstrap },
    description: `Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components.`,
    canFlip: true
  },
  {
    image: { light: alpine, dark: alpine },
    description: `"Nulla facilisi. Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem. Proin feugiat egestas dolor."`
  },
  {
    image: { light: python, dark: python },
    description: `Python is a programming language that lets you work quickly and integrate systems more effectively.`,
    canFlip: true
  },
  {
    image: { light: deloitteLight, dark: deloitteDark },
    description: `Suspendisse potenti. Nulla vel varius urna. Donec at libero ipsum. Nullam scelerisque tempus malesuada. Donec vehicula odio est, at faucibus purus sollicitudin ut. Fusce mollis ultrices ex sed pellentesque velit euismod.`
  }
]
