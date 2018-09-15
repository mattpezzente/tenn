import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/about-us.module.sass'

// Components
import Helmet from 'react-helmet'
import GreenBar from '../components/globals/green-bar'

const AboutUsPage = (props) => {
  // Data Schema
  const teamData = [
    {
      name: 'Robin Tennille',
      title: 'Chief Executive Officer',
      text: [
        'As the President of TCB Consulting, Robin Tennille’s experience includes: working at the Florida Department of Education as the Supervisor of NSLP, SBP, and SMP; serving as a Consulting Trainer for the Institute of Child Nutrition (ICN); serving as a Consulting Auditor for the largest school foodservice buying group in Florida; and is recognized as a School Nutrition Specialist. In the past 20 years, Robin has garnered a reputation within School Foodservice as a knowledgeable and incomparable source of knowledge consultant providing creative measures to improve efficiency and ensure regulatory compliance through consummate team building and training. Robin is an expert in general program/financial evaluation and review, financial management and turn-around, procurement and cooperative purchasing guidance, specialized training, Administrative Review preparation, Provision 2/CEP/Universal Feeding recommendations and evaluations, Free and Reduced Price Application processing, menu planning and recipe evaluation, production record creation and completion, food safety implementation and compliance, Smarter Lunchroom training, and much more.',
        'Robin’s consultative experience includes extensive program evaluation from both the State Agency perspective as well as “on the ground” operations and administration. Her experiences with School Foodservice cover the entire scope of Child Nutrition Programs in a variety of perspectives. Robin has provided operations and administrative guidance, evaluation, and efficiency assessments to over 400 School Food Authorities (SFAs) in 11 states and US territories. Robin has managed teams and directed programs to achieve copious results and successes within the realm of School Foodservice. Robin successfully completed the School Nutrition Specialist Credentialing Exam, is a Certified Public Manager, Certified Smarter Lunchrooms Trainer, and holds multiple Train the Trainer certificates with ICN. Her strengths in understanding School Food Service “day to day” opportunities and challenges ensure compliant recommendations meeting the unique needs of each SFA while ensuring children are provided healthy and delicious school meals. Additionally, Robin designed and implemented the inaugural New Directors Academy for up-and-coming Food Service Directors in the state of Florida. Most recently, Robin and her team have been working with multiple State Agencies to conduct Administrative and Procurement Reviews throughout the country.',
      ],
      img: props.data.teamRobinImage
    },
    {
      name: 'Kathryn Rippee',
      title: 'Chief Administrative Officer',
      text: ['Kathryn Rippee has worked with Child Nutrition Programs since 2006. She has played an integral part in the implementation of the State of Florida’s New Directors Academy and Back to Basics training for program operators. Kathryn was the prime developer for Paperwork Pal®, a tool to assist Districts in being compliant with the Healthy, Hunger-Free Kids Act. She provides administrative oversight, ensures project compliance and deadlines, conducts Administrative Reviews, and provides training in the areas of personal development and marketing. She is also a certified ServSafe Instructor and holds a Bachelor of Science degree in Marketing.'],
      img: props.data.teamKathrynImage
    },
    {
      name: 'Michael Jestus',
      title: 'Director of Operations',
      text: ['Michael Jestus brings over 19 years of experience in operational management and organization development. His broad background encompasses a wide variety of proven expertise, from leading multi-national teams in the development and implementation of leadership and management programs to managing local operations for one of the largest fine dining restaurant chains in the United States. Michael’s focus with Tennille Consulting is the continued development of efficient operations as well as the employment of novel solutions to challenging business scenarios in order to maintain the close-knit family atmosphere of the company as it continues to grow and expand. He holds a Bachelor of Science degree in Business Management.'],
      img: props.data.teamMikeImage
    },
    {
      name: 'Laurie Roder',
      title: 'Business Manager',
      text: ['Laurie Roder leads our financial management team. Since 1987, Laurie has been a financial manager. Her background in banking and finance ensure that TCB Consulting is compliant with awarded contracts and that financial records are complete and accurate. Laurie oversees billing, monitors contract compliance, and assists the administrative team.'],
      img: props.data.teamLaurieImage
    },
    {
      name: 'Scott Tennille',
      title: 'TCB Lead Monitor',
      text: ['Scott Tennille, TCB Lead Monitor, conducts offsite and onsite Child Nutrition Program Reviews. Scott began his Child Nutrition career with TCB in 2006 and has been instrumental in developing our current review process. Scott’s experience conducting reviews and providing technical assistance ensures quality and efficient outcomes.'],
      img: props.data.teamScottImage
    },
    {
      name: 'Minya Ridenour',
      title: 'TCB Lead Monitor',
      text: ['Minya Ridenour, TCB Lead Monitor, is an experienced Federal contract manager.  Since 2004, Minya has evaluated federal contracts for compliance.  Minya brings a new perspective to reviews for TCB Consulting. Equipped with a strong regulatory mindset and her southern hospitality, Minya ensures that reviews are conducted with exactness.'],
      img: props.data.teamMinyaImage
    },
    {
      name: 'Lisa Jestus',
      title: 'Quality Control Monitor',
      text: ['Lisa Jestus, Quality Control Monitor, uses her excellent attention to detail to review projects for accuracy. She is steadfast and conscientious when reviewing project documentation and ensures each project is completed according to client expectations.'],
      img: props.data.teamLisaImage
    },
  ]
  
  const teamMembers = teamData.map((item, i) => {
    return(
      <section key={i} className={styles.team}>
        <Img className={i === 0 ? styles.teamImgFirst : styles.teamImg} sizes={item.img.sizes} alt={`${item.name}, ${item.title}`} />
        <h2>{item.name}<span className={styles.comma}>,</span> <span className={styles.title}>{item.title}</span></h2>
        {item.text.map((paragraph, j) => {
          return(
            <p key={j}>{paragraph}</p>
          )
        })}
      </section>
    )
  })

  return(  
    <section>
      <Helmet
        title={'Tennille Consulting | About Us'}
        meta={[
          { name: 'description', content: 'The TCB Consulting team is composed of a decades of Child Nutrition experience. Learn more about our team, and know why we are one of the top Child Nutrition Program consultants!' },
          { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
          { name: 'author', content: 'Tennille Consulting, LLC' },
        ]}
      />
      <section className={styles.intro}>
        <h1 className={styles.introTitle}>About Us</h1>
      </section>
      <GreenBar/>
      {teamMembers}
      <section className={styles.dietitians}>
        <h2 className={styles.dietitiansTitle}>Our Dietitians</h2>
        <p className={styles.dietitiansText}>Our Registered Dietitians assist with menu planning, recipe development, production record training, and nutritional analysis support for Child Nutrition Programs. They are well versed in Nutrient Analysis and bring clinical, State Agency, and public school food service experience to the organization.  Our Dietitians bring practical advice and out of the box solutions to your program’s challenges.</p>
        <Img 
          sizes={props.data.aboutBackgroundImage.sizes}
          outerWrapperClassName={styles.gatsbyWrapper}
          alt='Dietitians section background of bamboo on a whisk board'
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </section>
    </section>
  )
}

export default AboutUsPage

export const aboutImageQuery = graphql`
  query AboutImageQuery {
    teamRobinImage: imageSharp(id: { regex: "/tennille-consulting-robin-tennille-chief-executive-officer/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamKathrynImage: imageSharp(id: { regex: "/tennille-consulting-kathryn-rippee-chief-administrative-officer/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamMikeImage: imageSharp(id: { regex: "/tennille-consulting-michael-jestus-director-of-operations/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamLaurieImage: imageSharp(id: { regex: "/tennille-consulting-laurie-roder-business-manager/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamAmyImage: imageSharp(id: { regex: "/tennille-consulting-amy-lewis-administrative-assistant/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamLisaImage: imageSharp(id: { regex: "/tennille-consulting-lisa-jestus-quality-control-manager/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamMinyaImage: imageSharp(id: { regex: "/tennille-consulting-minya-ridenour-tcb-lead-monitor/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    teamScottImage: imageSharp(id: { regex: "/tennille-consulting-scott-tennille-tcb/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    aboutBackgroundImage: imageSharp(id: { regex: "/tennille-consulting-bamboo-whisk-board/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`