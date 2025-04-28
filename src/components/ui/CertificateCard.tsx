import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Certificate } from '../../types';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className="bg-white dark:bg-primary-900/80 rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <span className="text-white font-medium">{certificate.issuer}</span>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-display font-semibold text-primary-800 dark:text-white mb-1">
          {certificate.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {certificate.date}
        </p>
      </div>
      {certificate.credential && (
        <div className="px-4 pb-4 mt-auto">
          <a
            href={certificate.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-accent-950 hover:underline"
          >
            <span>View Credential</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default CertificateCard;